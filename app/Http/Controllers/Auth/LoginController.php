<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;

class LoginController extends Controller
{
  protected $redirectTo = '/';

  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  public function index()
  {
    return view('auth.login');
  }

  public function login(LoginRequest $request)
  {
    $request->validate();
    $username = $request->get('username');
    $password = $request->get('password');

    if (\Auth::attempt(compact('username', 'password'))) {
      return redirect('/');
    }
  }

  public function logout()
  {
    \Auth::logout();

    return redirect('/login');
  }
}
