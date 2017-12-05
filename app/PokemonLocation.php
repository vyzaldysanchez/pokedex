<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class PokemonLocation
 * @package App
 *
 * @property float $latitude
 * @property float $longitude
 */
class PokemonLocation extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['latitude', 'longitude', 'pokemon_id'];

    /**
     * @return BelongsTo
     */
    public function pokemon(): BelongsTo
    {
        return $this->belongsTo(Pokemon::class);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'latitude' => (float)$this->latitude,
            'longitude' => (float)$this->longitude
        ];
    }
}
