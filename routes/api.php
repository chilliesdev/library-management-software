<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    // $userData = $request->user();
    $request->session()->put('userData',$request->user());
    return $request->session()->get('userData');
});
Route::post('/login', 'AuthController@login');
Route::middleware('auth:api')->post('/logout','AuthController@logout');

Route::group(['middleware' => 'api'], function () {
    // USERS
    Route::get('/users', 'UsersController@users');
    Route::get('/user/{id}', 'UsersController@show');
    Route::post('/edituser/{id}', 'UsersController@update');
    Route::post('/adduser', 'UsersController@create');
    
    // LIBRARY
    Route::get('/library', 'LibrariesController@show');
    Route::post('/addlibrary', 'LibrariesController@create');
    Route::post('/editlibrary/{id}', 'LibrariesController@update');
    Route::post('/deletelibrary/{id}', 'LibrariesController@destroy');
    
    // CUSTOMER
    Route::get('/customers', 'CustomersController@index');
    Route::get('/customer/{id}', 'CustomersController@show');
    Route::post('/customerbooks', 'CustomersController@books');
    Route::post('/addcustomer', 'CustomersController@create');
    Route::post('/editcustomer/{id}', 'CustomersController@update');
    Route::post('/deletecustomer/{id}', 'CustomersController@destroy');
    Route::post('/searchcustomer', 'CustomersController@search');
    
    // BOOK
    Route::get('/books', 'BooksController@index');
    Route::post('/book/{id}', 'BooksController@show');
    Route::get('/bookinfo/{id}', 'BooksController@bookInfo');
    Route::get('/bookrecommendation/{id}', 'BooksController@recommendation');
    Route::get('/bookpopular', 'BooksController@popular');
    Route::get('/booknewest', 'BooksController@newest');
    Route::get('/booklends/{id}', 'BooksController@lends');
    Route::post('/booklendlist', 'BooksController@lendlist');
    Route::post('/addbook', 'BooksController@create');
    Route::post('/lendbook', 'BooksController@lend');
    Route::post('/returnbook', 'BooksController@return');
    Route::post('/editbook/{id}', 'BooksController@update');
    Route::post('/deletebook/{id}', 'BooksController@destroy');
});