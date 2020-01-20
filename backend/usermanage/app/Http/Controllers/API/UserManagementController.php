<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\UserManagement;
use App\UserActivity;
use Validator;

class UserManagementController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usermanagements = UserManagement::all();

        $inputUserActivity = [
            'action' => 'get', 
            'user_id' => 1, 
            'details' => $usermanagements
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($usermanagements->toArray(), 'Users retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email_address' => 'required',
            'password' => 'required',
            'status' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $usermanagement = UserManagement::create($input);

        $inputUserActivity = [
            'action' => 'post', 
            'user_id' => 1, 
            'details' => $usermanagement
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($usermanagement->toArray(), 'User created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usermanagement = UserManagement::find($id);


        if (is_null($usermanagement)) {
            return $this->sendError('User not found.');
        }

        $inputUserActivity = [
            'action' => 'get/id', 
            'user_id' => 1, 
            'details' => $usermanagement
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($usermanagement->toArray(), 'User retrieved successfully.');
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
        $input = $request->all();

        $usermanagement = UserManagement::find($id);

        $validator = Validator::make($input, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email_address' => 'required',
            'password' => 'required',
            'status' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $usermanagement->first_name = $input['first_name'];
        $usermanagement->last_name = $input['last_name'];
        $usermanagement->email_address = $input['email_address'];
        $usermanagement->password = $input['password'];
        $usermanagement->status = $input['status'];
        $usermanagement->save();

        $inputUserActivity = [
            'action' => 'put', 
            'user_id' => 1, 
            'details' => $usermanagement
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($usermanagement->toArray(), 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usermanagement = UserManagement::find($id);
        $usermanagement->delete();

        $inputUserActivity = [
            'action' => 'delete', 
            'user_id' => 1, 
            'details' => $usermanagement
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);


        return $this->sendResponse($usermanagement->toArray(), 'User deleted successfully.');
    }

    public function statuschange($id) {
        $input = $request->all();

        $usermanagement = UserManagement::find($id);

        $validator = Validator::make($input, [
            'status' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $usermanagement->status = $input['status'];
        $usermanagement->save();

        $inputUserActivity = [
            'action' => 'post', 
            'user_id' => 1, 
            'details' => $usermanagement
        ];

        // Logs
        $UserActivits = UserActivity::create($inputUserActivity);

        return $this->sendResponse($usermanagement->toArray(), 'User updated successfully.');
    }
}
