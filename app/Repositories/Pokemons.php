<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use App\Repositories\Images;
use App\Pokemon;
use App\Http\Requests\PokemonCreationRequest;
use App\Http\Requests\PokemonUpdateRequest;

class Pokemons
{

    /**
     * Retrieve a pokemon by id.
     *
     * @param int $id
     * @param array $relations
     * @return Pokemon
     */
    public static function getById(int $id, array $relations = []): Pokemon
    {
        return Pokemon::with($relations)->find($id);
    }

    /**
     * Retrieve all stored pokemons.
     *
     * @param array $columns
     * @return Collection
     */
    public static function getAll(array $columns = ['*'], array $relations = []): Collection
    {
        if ($relations) {
            return Pokemon::with($relations)->get($columns);
        }

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

    /**
     * Updates the required pokemon using HTTP request
     *
     * @param PokemonUpdateRequest $request
     * @param Pokemon $pokemon
     * @return Pokemon
     */
    public static function update(PokemonUpdateRequest $request, Pokemon $pokemon): Pokemon
    {
        $fields = [
            'captured' => $request->get('captured') !== 'false',
            'public' => $request->get('public') !== 'false',
            'user_id' => \Auth::user()->id
        ] + $request->only(['name', 'description', 'age', 'pounds']);

        $pokemon->update($fields);

        if ($pokemonTypes = $request->get('pokemon_types_ids')) {
            $pokemon->types()->sync($pokemonTypes);
        }

        if ($image = $request->get('image')) {
            Images::store($image, $pokemon->id);
        }

        return $pokemon;
    }
}
