<?php

namespace App\Repositories;

use Illuminate\Pagination\Length;
use App\Repositories\Images;
use App\Pokemon;
use App\Repositories\Locations;
use App\Http\Requests\PokemonCreationRequest;
use App\Http\Requests\PokemonUpdateRequest;
use App\Http\CustomRequests\PokemonSearchRequest;
use App\Http\CustomRequests\PokemonSelectRequest;

class Pokemons
{
    const POKEMONS_PER_PAGE = 15;

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
     * @param PokemonSelectRequest $select
     * @return array|Length
     */
    public static function getAll(PokemonSelectRequest $select)
    {
        $query = Pokemon::select($select->columns)->with($select->relations);
         
        return $query->paginate($select->amount);
    }

    /**
     * Finds pokemons based on name/description and types
     *
     * @param PokemonSearchRequest $searchRequest
     * @param PokemonSelectRequest $select
     * @return array|Length
     */
    public static function findAll(PokemonSearchRequest $searchRequest, PokemonSelectRequest $select)
    {
        $query = Pokemon::select($select->columns)->with($select->relations);

        if ($searchRequest->performTextSearch()) {
            $query->nameOrDescription($searchRequest->search);
        }

        if ($searchRequest->pokemonTypes) {
            $query->types($searchRequest->pokemonTypes);
        }

        return $query->paginate($select->amount);
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

        $location = $request->get('location');
        
        Locations::store(['latitude' => $location['lat'], 'longitude' => $location['lng']], $pokemon->id);
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

        if ($location = $request->get('location')) {
            Locations::update(['latitude' => $location['lat'], 'longitude' => $location['lng']], $pokemon->id);
        }

        if ($image = $request->get('image')) {
            Images::store($image, $pokemon->id);
        }

        return $pokemon;
    }
}
