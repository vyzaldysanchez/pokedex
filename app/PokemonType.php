<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class PokemonType
 * @package App
 */
class PokemonType extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

     /**
     * @return BelongsToMany
     */
    public function pokemons(): BelongsToMany
    {
        return $this->belongsToMany(Pokemon::class);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'color' => $this->color
        ];
    }
}
