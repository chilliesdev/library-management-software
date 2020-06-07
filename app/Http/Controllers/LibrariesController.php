<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Image;
use App\Library;
use Validator;

class LibrariesController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'picture' => 'required|image|max:1999',
        ]);

        $fileNameWithExt = $request->picture->getClientOriginalName();
        $fileName = pathinfo($fileNameWithExt,PATHINFO_FILENAME);
        $extension = $request->picture->getClientOriginalExtension();
        $fileNameToStore = $fileName.'_'.time().'.'.$extension;

        $path = $request->picture->storeAs('public/library_cover',$fileNameToStore);
        Image::make(storage_path('app/public/library_cover/'.$fileNameToStore))
            ->resize(300, 300, function($constraint) {
                $constraint->aspectRatio();
            })
            ->save(storage_path('app/public/library_cover/'.$fileNameToStore));    

        return Library::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'picture' => $fileNameToStore,
        ]);
    }

    public function show()
    {
        return Library::get();
    }

    public function update(Request $request, $id)
    {
        if ($request->hasFile('picture')){
            $validator = Validator::make($request->all(),
                ['picture' => 'image|max:1999']
            );

            if($validator->fails()){
                $response = [
                    'response' => $validator->messages(),
                    'success' => false,
                ];

                return $response;
            }
        }

        $library = Library::find($id);
        $library->name = $request->name;
        $library->address = $request->address;
        $library->phone = $request->phone;

        if ($request->hasFile('picture')){
            $imagePath = "public/library_cover/".$library->picture;
            // return $imagePath;
  
            if (Storage::exists($imagePath)){
                Storage::delete($imagePath);
            }
                
            $fileNameWithExt = $request->picture->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExt,PATHINFO_FILENAME);
            $extension = $request->picture->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$extension;

            $path = $request->picture->storeAs('public/library_cover',$fileNameToStore);
            Image::make(storage_path('app/public/library_cover/'.$fileNameToStore))
                ->resize(300, 300, function($constraint) {
                    $constraint->aspectRatio();
                })
                ->save(storage_path('app/public/library_cover/'.$fileNameToStore));    

            $library->picture = $fileNameToStore;
        }

        $library->save();
        return response()->json($library);
    }

    public function destroy($id)
    {
        $library = Library::find($id);
        $imagePath = "public/library_cover/".$library->picture;
        if (Storage::exists($imagePath)){
            Storage::delete($imagePath);
        }
        $library->delete();

        $response = [
            'message' => 'Library Deleted',
        ];

        return $response;
    }
}
