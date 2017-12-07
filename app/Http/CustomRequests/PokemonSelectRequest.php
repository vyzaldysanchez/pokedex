<?php

namespace App\Http\CustomRequests;

class PokemonSelectRequest
{
    public $columns;
    public $relations;
    public $amount;

    /**
     * Pokemon Select request constructor
     *
     * @param array $columns
     * @param array $relations
     * @param int $amount
     */
    public function __construct(array $columns = ['*'], array $relations = [], int $amount = 0)
    {
        $this->columns = $columns;
        $this->relations = $relations;
        $this->amount = $amount;
    }
}
