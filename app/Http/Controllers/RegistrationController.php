<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;

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

    return redirect('/');
  }
}
