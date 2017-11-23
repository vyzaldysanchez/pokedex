<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class NotCurrentPassword implements Rule
{
  protected $email;

  public function __construct(string $email)
  {
    $this->email = $email;
  }

  /**
   * Determine if the validation rule passes.
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @return bool
   */
  public function passes($attribute, $value) : bool
  {
    $userPassword = \App\User::where('email', '=', $this->email)->pluck('password')->first();
    return !\Hash::check($value, $userPassword);
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message(): string
  {
    return 'Cannot use previous password as new one.';
  }
}
