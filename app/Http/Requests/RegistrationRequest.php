<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'fullName' => 'required',
      'telephone' => 'required',
      'city' => 'required',
      'email' => 'required|email|unique:users,email',
      'username' => 'required|unique:users,username',
      'password' => 'required|min:6|confirmed'
    ];
  }
}
