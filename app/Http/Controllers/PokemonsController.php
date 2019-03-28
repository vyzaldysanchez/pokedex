<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pokemon;
use App\Repositories\Pokemons;
use App\Http\Requests\PokemonCreationRequest;
use App\Http\Requests\PokemonUpdateRequest;
use App\Http\Requests\PokemonDeletionRequest;
use App\Http\CustomRequests\PokemonSelectRequest;
use App\Http\CustomRequests\PokemonSearchRequest;
use App\Enums\HttpStatus;

class PokemonsController extends Controller
{
    protected $commonRelations = ['types', 'location'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $amount = $request->has('amount') ? $request->get('amount') : Pokemons::POKEMONS_PER_PAGE;
        $select = new PokemonSelectRequest(['*'], $this->commonRelations, $amount);

        if ($request->has('search') || $request->has('pokemonType')) {
            $search = new PokemonSearchRequest((string)$request->get('search'), $request->get('pokemonType'));

            return Pokemons::findAll($search, $select);
        }

        return Pokemons::getAll($select);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PokemonCreationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PokemonCreationRequest $request)
    {
        return Pokemons::store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return Pokemons::getById($id, $this->commonRelations);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('home.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\PokemonUpdateRequest  $request
     * @param  \App\Pokemon  $pokemon
     * @return \Illuminate\Http\Response
     */
    public function update(PokemonUpdateRequest $request, Pokemon $pokemon)
    {
        return Pokemons::update($request, $pokemon);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PokemonDeletionRequest $request
     * @param  Pokemon  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PokemonDeletionRequest $request, Pokemon $pokemon)
    {
        $pokemon->delete();

        return \response('', HttpStatus::NO_CONTENT);
    }
}
