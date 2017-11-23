<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PokemonLocation
 * @package App
 */
class PokemonLocation extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
}
