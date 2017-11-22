<?php

namespace App;

use Illuminate\Database\Eloquent\{Model, SoftDeletes};

class PokemonType extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
}
