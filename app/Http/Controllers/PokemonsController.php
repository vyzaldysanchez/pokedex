<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pokemon;
use App\Repositories\Pokemons;
use App\Http\Requests\PokemonCreationRequest;
use App\Http\Requests\PokemonUpdateRequest;

class PokemonsController extends Controller
{
    protected $commonRelations = ['types', 'location'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Pokemons::getAll(['*'], $this->commonRelations);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PokemonCreationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PokemonCreationRequest $request)
    {
        $request->validate();

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
        $request->validate();

        return Pokemons::update($request, $pokemon);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
