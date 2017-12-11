<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    protected $redirectTo = '/';

    public function index()
    {
        return view('auth.login');
    }

    public function login(LoginRequest $request)
    {
        $request->validate();
        
        $username = $request->get('identifier');
        $password = $request->get('password');
        $usernameFieldName = filter_var($username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if (\Auth::attempt(compact('password') + [$usernameFieldName => $username])) {
            return redirect('/');
        }

        \Session::flash('error', 'Wrong username password combination.');

        return back();
    }

    public function logout()
    {
        \Auth::logout();

        return redirect('/login');
    }
}
