<?php


namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\UserManagement;
use Illuminate\Support\Facades\Auth;
use Validator;


class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email_address' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $input = $request->all();

        $input['status'] = 1;
        $input['token'] = 'xxzczcv';
        $user = UserManagement::create($input);
        $success['first_name'] =  $user->first_name;

        return $this->sendResponse($success, 'User register successfully.');
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|email',
            'password' => 'required'
        ]);

        $input = $request->all();

        $user = UserManagement::where('email_address', $input['username'])
        ->where('password', $input['password'])
        ->get(); 

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        //echo($user);
     
        if($user && $user[0] && $user[0]->status) {
            $success['user'] =  $user[0];
            $m = 'User login successfully.';
        } else if($user && $user[0] && !$user[0]->status) {
            $success['user'] =  $user[0]; 
            $m = 'User is Deactive';
        } else {
            $success['user'] =  $user[0];
            $m = 'User not found';
        }

        return $this->sendResponse($success, $m);
    }
}