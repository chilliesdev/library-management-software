<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
	public function login(Request $request)
	{
		$http = new \GuzzleHttp\Client;

		try {
			$reponse = $http->post(env('PASSPORT_LOGIN_ENDPOINT'),[
				'form_params' => [
					'grant_type' => 'password',
					'client_id' => env('PASSPORT_CLIENT_ID'),
					'client_secret' => env('PASSPORT_CLIENT_SECRET'),
					'username' => $request->username,
					'password' => $request->password,
				]
			]);

			return $reponse->getBody();
		} catch (\GuzzleHttp\Exception\BadResponseException $e){
			if ($e->getCode() == 400){
				return response()->json('400');
				// return response()->json('Invalid request. Please enter a username or a password.');
			} else if ($e->getCode() == 401){
				// return response()->json('Your credentials are incorrect. Please try again');
				return response()->json('401');
			}

			return response()->json('Something went wrong on the server.',$e->getCode());
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
