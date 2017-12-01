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

    public function toArray(): array
    {
        $fields = [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'age' => $this->age . ' years.',
            'pounds' => $this->pounds . ' pounds.',
            'public' => (bool)$this->public,
            'captured' => (bool)$this->captured
        ];

        return $fields + $this->relations;
    }
}
