<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use App\User;
use Validator;
use Image;

class UsersController extends Controller
{
    public function users()
    {
        $users = User::get();
        $users_library = [];
        foreach ($users as $user){
            $temp = $user;
            $temp['library'] = $user->library;
            array_push($users_library,$temp);
        }
        return $users_library;
    }

    public function show(Request $request, $id)
    {
        $user = User::find($id);
        $user['library'] = $user->library;
        return $user;
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'profilePic' => 'required|image|max:1999',
        ]);

        if ($validator->fails()){
            $response = [
                'response' => $validator->messages(),
                'success' => false,
            ];

            return response()->json($response);
        }

        $fileNameWithExt = $request->profilePic->getClientOriginalName();
        $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        $extension = $request->profilePic->getClientOriginalExtension();
        $fileNameToStore = $filename.'_'.time().'.'.$extension;

        $path = $request->profilePic->storeAs('public/photo/',$fileNameToStore);
        Image::make(storage_path('app/public/photo/'.$fileNameToStore))
                ->resize(250, 300, function($constraint) {
                    $constraint->aspectRatio();
                })
                ->save(storage_path('app/public/photo/'.$fileNameToStore));
        
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'library_id' => $request->library,
            'profile_pic' => $fileNameToStore,
            'password' => Hash::make($request->password),
        ]);
    }
    
    public function update(Request $request, $id)
    {
        if ($request->hasFile('profilePic')){
            $validator = Validator::make($request->all(),
                ['profilePic' => 'image|max:1999']
            );

            if($validator->fails()){
                $response = [
                    'response' => $validator->messages(),
                    'success' => false,
                ];

                return response()->json($response);
            }
        }

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->library_id = $request->library;

        if ($request->has('password')){
            $user->password = Hash::make($request->password);
        }

        if ($request->hasFile('profilePic')){
            $imagePath = "public/photo/".$user->profilePic;
  
            if (Storage::exists($imagePath)){
                Storage::delete($imagePath);
            }
                
            $fileNameWithExt = $request->profilePic->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExt,PATHINFO_FILENAME);
            $extension = $request->profilePic->getClientOriginalExtension();
            $fileNameToStore = $fileName.'_'.time().'.'.$extension;

            $path = $request->profilePic->storeAs('public/photo/',$fileNameToStore);
            Image::make(storage_path('app/public/photo/'.$fileNameToStore))
                ->resize(250, 300, function($constraint) {
                    $constraint->aspectRatio();
                })
                ->save(storage_path('app/public/photo/'.$fileNameToStore));

            $user->profile_pic = $fileNameToStore;
        }

        $user->save();
        return response()->json($user);
    }
}