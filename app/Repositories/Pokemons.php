<?php

namespace App\Repositories;

use App\Repositories\Images;
use App\Pokemon;
use App\Http\Requests\PokemonCreationRequest;
use Illuminate\Support\Collection;

class Pokemons
{
    /**
     * Retrieve all stored pokemons.
     *
     * @param array $columns
     * @return Collection
     */
    public static function getAll(array $columns = ['*']): Collection
    {
        return Pokemon::all($columns);
    }
    /**
     * Stores a Pokemon in the DB from a http request
     *
     * @param PokemonCreationRequest $request
     * @return Pokemon
     */
    public static function store(PokemonCreationRequest $request): Pokemon
    {
        $hasBeenCaptured = $request->has('captured') ? $request->get('captured') !== 'false' : false;
        $isPublic = $request->has('public') ? $request->get('public') !== 'false' : false;
        $fieldsToSave = $request->only(['name', 'description', 'age', 'pounds']);
        $missingFields = [
            'captured' => $hasBeenCaptured,
            'public' => $isPublic,
            'user_id' => \Auth::user()->id
        ];

        $pokemon = Pokemon::create($fieldsToSave + $missingFields);
 
        $pokemon->types()->sync($request->get('pokemon_types_ids'));
        Images::store($request->image, $pokemon->id);

        return $pokemon;
    }
}
