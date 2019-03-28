<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Builder;

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

    /**
     * @return HasOne
     */
    public function image(): HasOne
    {
        return $this->hasOne(Image::class);
    }

    /**
     * @return HasOne
     */
    public function location(): HasOne
    {
        return $this->hasOne(PokemonLocation::class);
    }

    /**
     * Adds types filter to query
     *
     * @param Builder $query
     * @param array $types
     * @return void
     */
    public function scopeTypes(Builder $query, array $types = [])
    {
        return $query->whereHas('types', function (Builder $query) use ($types) {
            $query->whereIn('id', $types);
        });
    }

    /**
     * Adds name/description search filter to query
     *
     * @param Builder $query
     * @param string $search
     * @return void
     */
    public function scopeNameOrDescription(Builder $query, string $search)
    {
        return $query->where('name', $search)->orWhere('description', $search);
    }

    /**
     * Array representation sent to the client
     *
     * @return array
     */
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
