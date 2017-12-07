<?php

namespace App\Http\CustomRequests;

class PokemonSearchRequest
{
    public $search;
    public $pokemonTypes;

    public function __construct(string $search, array $pokemonTypes)
    {
        $this->search = $search;
        $this->pokemonTypes = $pokemonTypes;
    }

    /**
     * @return bool
     */
    public function performTextSearch(): bool
    {
        return !empty($this->search);
    }
}
