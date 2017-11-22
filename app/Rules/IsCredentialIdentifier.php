<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class IsCredentialIdentifier implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        return \App\User::where('email', $value)
            ->orWhere('username', $value)
            ->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return 'There are no records for the identifications provided.';
    }
}
