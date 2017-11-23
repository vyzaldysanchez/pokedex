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
    use Notifiable;

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
}
