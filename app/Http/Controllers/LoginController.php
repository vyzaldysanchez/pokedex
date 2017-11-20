<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  public function index()
  {
    return view('auth.login');
  }

  public function login()
  {
  }

  public function logout()
  {
    \Auth::logout();

    return redirect('/');
  }
}
