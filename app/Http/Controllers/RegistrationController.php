<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\User;

class RegistrationController extends Controller
{
  public function __construct()
  {
    $this->middleware('guest');
  }

  public function index()
  {
    return view('auth.register');
  }

  public function register(RegistrationRequest $request)
  {
    $request->validate();

    $user = User::create([
      'username' => $request->get('username'),
      'full_name' => $request->get('fullName'),
      'city' => $request->get('city'),
      'email' => $request->get('email'),
      'password' => bcrypt($request->get('password')),
    ]);

    \Auth::login($user);

    return redirect('/');
  }
}
