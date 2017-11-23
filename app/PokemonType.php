<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class PokemonType
 * @package App
 */
class PokemonType extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
}
