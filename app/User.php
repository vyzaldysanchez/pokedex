<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Notifications\PasswordResetRequested;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class User
 * @package App
 */
class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    protected $fillable = [
        'full_name', 'telephone', 'city', 'email', 'username', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $dates = ['deleted_at'];

    public function pokemons() : HasMany
    {
        return $this->hasMany(Pokemon::class);
    }

    public function sendPasswordResetNotification($token) : void
    {
        $this->notify(new PasswordResetRequested($token, $this->email));
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'fullName' => $this->full_name,
            'city' => $this->city,
            'telephone' => $this->telephone,
            'email' => $this->email,
            'username' => $this->username,
            'memberSince' => $this->created_at->toFormattedDateString()
        ];
    }
}
