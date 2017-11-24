<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\User;

class RegistrationController extends Controller
{
    public function index()
    {
        return view('auth.register');
    }

    public function register(RegistrationRequest $request)
    {
        $request->validate();

        $user = User::create(
            [
            'username' => $request->get('username'),
            'full_name' => $request->get('fullName'),
            'telephone' => $request->get('telephone'),
            'city' => $request->get('city'),
            'email' => $request->get('email'),
            'password' => \Hash::make($request->get('password')),
            ]
        );

        \Auth::login($user);

        return redirect('/');
    }
}
