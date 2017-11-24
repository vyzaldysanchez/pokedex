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

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'color' => $this->color
        ];
    }
}
