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

Route::resource('user_managements', 'API\UserManagementController');
Route::resource('user_activities', 'API\UserActivityController');

/* Route::resource('user_managements', 'API\UserManagementController')->except([
    'create', 'store', 'update', 'destroy'
]);
 */
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
