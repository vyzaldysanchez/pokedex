<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\RegistrationUpdateRequest;
use App\User;

class RegistrationController extends Controller
{
    public function index()
    {
        return view('auth.register');
    }

    /**
     * Creates a new user account
     *
     * @param RegistrationRequest $request
     * @return \Illuminate\Http\Response
     */
    public function register(RegistrationRequest $request)
    {
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

    /**
     * Updates user account
     *
     * @param RegistrationUpdateRequest $request
     * @return \Illuminate\Http\Response
     */
    public function update(RegistrationUpdateRequest $request)
    {
        \Auth::user()->update($request->only(['full_name', 'city', 'telephone']));

        \Session::flash('status', 'Your information has been successfully updated.');

        return redirect('/account/edit');
    }
}
