<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\UserManagement;
use App\UserActivity;

class UserActivityController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userActivits = UserActivity::all();

        $inputUserActivity = [
            'action' => 'get/user_activies', 
            'user_id' => 1, 
            'details' => $userActivits
        ];

        // Logs
        $createuserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($userActivits->toArray(), 'UserActivits retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userActivityList = UserActivity::where('user_id', $id)->get();

        if (is_null($userActivityList)) {
            return $this->sendError('User not found.');
        }

        $inputUserActivity = [
            'action' => 'get/id', 
            'user_id' => 1, 
            'details' => $userActivityList
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($userActivityList->toArray(), 'User retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
