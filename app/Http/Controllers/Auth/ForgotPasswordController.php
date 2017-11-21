<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use App\Http\Requests\PasswordReminderRequest;

class ForgotPasswordController extends Controller
{
  use SendsPasswordResetEmails;

  protected $redirectTo = '/login';

  public function __construct()
  {
    $this->middleware('guest');
  }

  public function index()
  {
    return view('auth.passwords.recover');
  }

  public function recover(PasswordReminderRequest $request)
  {
    $request->validate();

    return $this->sendResetLinkEmail($request);
  }
}
