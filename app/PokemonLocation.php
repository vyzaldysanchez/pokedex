<?php

namespace App;

use Illuminate\Database\Eloquent\{Model, SoftDeletes};

class PokemonLocation extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
}
