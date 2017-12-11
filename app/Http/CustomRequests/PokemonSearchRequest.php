<?php

namespace App\Http\CustomRequests;

class PokemonSearchRequest
{
    public $search;
    public $pokemonTypes;

    public function __construct(string $search, array $pokemonTypes)
    {
        $this->search = $search;
        $this->pokemonTypes = array_filter($pokemonTypes, function ($type) {
            return $type != null;
        });
    }

    /**
     * @return bool
     */
    public function performTextSearch(): bool
    {
        return !empty($this->search);
    }
}
