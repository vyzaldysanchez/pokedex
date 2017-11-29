<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Pokemon
 * @package App
 */
class Pokemon extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $table = 'pokemons';

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasMany
     */
    public function types(): BelongsToMany
    {
        return $this->belongsToMany(PokemonType::class);
    }
}
