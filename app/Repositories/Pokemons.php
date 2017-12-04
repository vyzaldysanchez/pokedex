<?php

namespace App\Repositories;

use App\Repositories\Images;
use App\Pokemon;
use App\Http\Requests\PokemonCreationRequest;
use Illuminate\Pagination\Length;

class Pokemons
{
    const POKEMONS_PER_PAGE = 15;

    /**
     * Retrieve all stored pokemons.
     *
     * @param array $columns
     * @return array|Length
     */
    public static function getAll(array $columns = ['*'], array $relations = [])
    {
        $query = Pokemon::select($columns);

        if ($relations) {
            $query = $query->with($relations);
        }
         
        return $query->paginate(static::POKEMONS_PER_PAGE);
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
