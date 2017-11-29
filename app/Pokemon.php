<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Class Pokemon
 * @package App
 */
class Pokemon extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $table = 'pokemons';

    protected $fillable = [
        'name',
        'description',
        'age',
        'pounds',
        'public',
        'captured',
        'user_id'
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsToMany
     */
    public function types(): BelongsToMany
    {
        return $this->belongsToMany(PokemonType::class);
    }

    public function image(): HasOne
    {
        return $this->hasOne(Image::class);
    }
}
