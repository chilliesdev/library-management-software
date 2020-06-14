<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 

class AuthController extends Controller
{
	public $successStatus = 200;

	public function login(){ 
		if(Auth::attempt(['email' => request('username'), 'password' => request('password')])){ 
				$user = Auth::user(); 
				$success['access_token'] =  $user->createToken('MyApp')->accessToken; 
				return response()->json($success, $this->successStatus); 
		} 
		else{ 
				return response()->json(['error'=>'Unauthorised'], 401); 
		} 
	}

	public function logout()
	{
		auth()->user()->tokens->each(function ($token, $key){
			$token->delete();
		});

		return response()->json('Logged out succesfully', 200);
	}
}
