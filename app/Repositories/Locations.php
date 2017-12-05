<?php

namespace App\Repositories;

use App\PokemonLocation;

/**
 * Class Locations
 * @package App\Repositories
 *
 * @method \App\PokemonLocation store()
 */
class Locations
{
    /**
     * Stores a location for a certain pokemon in the database
     *
     * @param array $fields
     * @param int $pokemonId
     * @return \App\PokemonLocation
     */
    public static function store(array $fields, int $pokemonId): PokemonLocation
    {
        return PokemonLocation::create($fields + ['pokemon_id' => $pokemonId]);
    }
}
