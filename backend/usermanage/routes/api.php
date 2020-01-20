<?php

use Illuminate\Http\Request;

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

Route::post('login', 'API\RegisterController@login');
Route::post('register', 'API\RegisterController@register');

Route::put('user_managements/status/{id}', 'API\UserManagementController@statuschange');
Route::resource('user_managements', 'API\UserManagementController');
Route::resource('user_activities', 'API\UserActivityController');

/* Route::prefix('user_activities')->group(function () {
    Route::get('', 'API\UserActivityController@index');
    Route::put('{id}', 'API\UserActivityController@show');
    Route::post('', 'API\UserActivityController@store');
    Route::put('{id}', 'API\UserActivityController@update');
    Route::delete('', 'API\UserActivityController@destroy');
    Route::put('/status/{id}', 'API\UserActivityController@statuschange');
}); */


/* Route::resource('user_managements', 'API\UserManagementController')->except([
    'create', 'store', 'update', 'destroy'
]);
 */
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
