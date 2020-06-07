<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Book;
use App\BookInfo;
use App\Library;
use App\LendLog;
use Validator;
use Image;

class BooksController extends Controller
{
	public function index()
	{
		$books = Book::orderBy('name','ASC')->paginate(6);
		return $books;
	}

	public function show(Request $request, $id)
	{
		$libraryId = $request->library;

		$book = Book::find($id);
		$book['availability'] = false;
		foreach ($book->library as $library){
// TO SET CURRENT LIBRARY AVAILABILTY
			if (( $library->id == $libraryId ) && ( $library->pivot->quantity > 0 )) {
				$book['availability'] = true;
			}
		}
		return $book;
	}

	public function bookInfo(Request $request, $id)
	{
		return Book::find($id)->library;
	}

	public function lend(Request $request)
	{
// TO CHECK IF CUSTOMER HAS LENDED THE BOOK PREVIOUSLY WITHOUT RETURNING
		$param = [
			['customer_id', $request->customer],
			['library_id', $request->library],
			['book_id', $request->book],
			['status', 'NOTRETURNED'],
		];
		$lendInfo = LendLog::where($param)->first();

		if ($lendInfo){
			return response()->json([
				'success' => false,
				'message_code' => 'NOTRETURNED',
			]);
		}

		$param = [
			['book_id', $request->book],
			['library_id', $request->library]
		];
		$bookInfo = BookInfo::where($param)->first();
		$quantity = $bookInfo->quantity;
		if ($quantity == 0){
			return response()->json(['status' => false]);
		}
		$newQuantity = $quantity-1;

		Book::find($request->book)->increment('count');

		BookInfo::where('id',$bookInfo->id)->update([
			'quantity' => $newQuantity
		]);

		return LendLog::Create([
			'book_id' => $request->book, 
			'customer_id' => $request->customer, 
			'library_id' => $request->library, 
			'user_id' => $request->user,
			'status' => 'NOTRETURNED'
		]);
	}

	public function return(Request $request)
	{
		$param = [
			['book_id', $request->book],
			['library_id', $request->library],
			['customer_id', $request->customer],
			// ['user_id', $request->user],
		];
		LendLog::where($param)->update([
			'status' => 'RETURNED',
			'user_return_id' => $request->user,
		]);

		$param = [
			['book_id', $request->book],
			['library_id', $request->library],
		];
		$bookInfo = BookInfo::where($param)->first();
		$quantity = $bookInfo->quantity;
		$newQuantity = $quantity+1;
		return BookInfo::where('id',$bookInfo->id)->update([
			'quantity' => $newQuantity
		]);
	}

	public function lends(Request $request, $id)
	{
		$param = [
			['library_id',$id],
			['status','NOTRETURNED']
		];
		$lendLog = LendLog::where($param)->orderBy('created_at','DESC')->paginate(5);
		foreach ($lendLog as $log){
			$log->customers;
			$log->books;
		}
		return $lendLog;
	}

	public function newest(Request $request)
	{
		return Book::orderBy('created_at','DESC')->paginate(5);
	}

	public function lendList (Request $request)
	{
		$param = [
			['book_id', $request->book],
			['library_id', $request->library],
			['status', 'NOTRETURNED'],
		];
		$lendLog = LendLog::where($param)->orderBy('created_at','DESC')->paginate(5);
		$customers = [];
		foreach ($lendLog as $log){
			array_push($customers,$log->customers);
		}
		return $lendLog;
	}

	public function recommendation(Request $request, $id)
	{
		$book = Book::find($id);
		return Book::where(['genre' => $book->genre],['id','!=',$id])
			->orWhere(['author' => $book->author],['id','!=',$id])->orderBy('count','DESC')->paginate(3);
	}

	public function popular(Request $request)
	{
		return Book::orderBy('count','DESC')->paginate(5);
	}

	public function create(Request $request)
	{
		$libraries = Library::get();

		$validator = validator::make($request->all(),
			['name' => 'required|min:4',
			'author' => 'required|min:4',
			'description' => 'required',
			'rating' => 'required',
			'genre' => 'required',
			'cover' => 'required|mimes:jpeg,jpg,png,gif,bmp|image|max:1999']
		);

		foreach($libraries as $library){
			if ($request->has('library_id_'.$library['id'])){
				$validator = validator::make($request->all(),
					['library_id_'.$library['id'] => 'required|numeric|min:1']
				);
			}
		}

		if ($validator->fails()){
			$response = [
				'message' => $validator->messages(),
				'success' => false,
			];

			return $response;
		}

		$fileNameWithExt = $request->cover->getClientOriginalName();
		$fileName = pathinfo($fileNameWithExt,PATHINFO_FILENAME);
		$extension = $request->cover->getClientOriginalExtension();
		$fileNameToStore = $fileName.'_'.time().'.'.$extension;

		$path = $request->cover->storeAs('public/book_cover',$fileNameToStore);
		Image::make(storage_path('app/public/book_cover/'.$fileNameToStore))
			->resize(250, 300, function($constraint) {
					$constraint->aspectRatio();
			})
			->save(storage_path('app/public/book_cover/'.$fileNameToStore));

		$book = new Book;
		$book->name = $request->name;
		$book->author = $request->author;
		$book->description = $request->description;
		$book->genre = $request->genre;
		$book->rating = $request->rating;
		$book->cover = $fileNameToStore;
		$book->count = 0;

		$book->save();

		$library = new Library;

		$bookInfo = [];
		foreach($libraries as $library){
			if ($request->has('library_id_'.$library['id'])){
				$TempLibraryId = $library['id'];
				$TempQunatity = $request['library_id_'.$library['id']];
				$Additionaldata = ['quantity' => $TempQunatity];

				$bookInfo[$TempLibraryId] = $Additionaldata;
			}
		}

		return $book->library()->sync($bookInfo);
	}

	public function update(Request $request, $id)
	{
		$book = Book::find($id);
		$book->name = $request->name;
		$book->author = $request->author;
		$book->genre = $request->genre;
		$book->description = $request->description;
		$book->rating = $request->rating;

		if ($request->hasFile('cover')){
			$validator = validator::make($request->all(),
				['cover' => 'mimes:jpeg,jpg,png,gif,bmp|image|max:1999']
			);

			if ($validator->fails()){
				$response = [
					'message' => $validator->messages(),
					'success' => false
				];

				return $response;
			}

			$imagePath = "public/book_cover/".$book->cover;

			if (Storage::exists($imagePath)){
				Storage::delete($imagePath);
			}
					
			$fileNameWithExt = $request->cover->getClientOriginalName();
			$fileName = pathinfo($fileNameWithExt,PATHINFO_FILENAME);
			$extension = $request->cover->getClientOriginalExtension();
			$fileNameToStore = $fileName.'_'.time().'.'.$extension;

			$path = $request->cover->storeAs('public/book_cover',$fileNameToStore);
			Image::make(storage_path('app/public/book_cover/'.$fileNameToStore))
			->resize(250, 300, function($constraint) {
					$constraint->aspectRatio();
			})
			->save(storage_path('app/public/book_cover/'.$fileNameToStore));

			$book->cover = $fileNameToStore;
		}

// UPDATE THE BOOK INFO DB FOR LIBRARY QUANTITY DETAILS
		$libraries = Library::get();
		$bookInfo = [];
		foreach ($libraries as $library) {
			if ($request->has('library_id_'.$library['id'])){
				$TempLibraryId = $library['id'];
				$TempQunatity = $request['library_id_'.$library['id']];
				$Additionaldata = ['quantity' => $TempQunatity];

				$bookInfo[$TempLibraryId] = $Additionaldata;
			}
		}
		
		$book->save();
		return $book->library()->sync($bookInfo);
	}

	public function destroy(Request $request, $id)
	{
		$book = Book::find($id);
		$libraries = new Library;
		$imagePath = "public/book_cover/".$book->cover;
		if (Storage::exists($imagePath)){
				Storage::delete($imagePath);
		}

		$book->library()->detach();
		$book->delete();

		return $response = [
			'message' => 'Book Deleted',
		];
	}
}