<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PokemonType;

class PokemonTypesController extends Controller
{
    public function index(Request $request)
    {
        return PokemonType::all();
    }
}
