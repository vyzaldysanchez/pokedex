<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PokemonsImagesController extends Controller
{
    public function find(\App\Pokemon $pokemon)
    {
        $path = storage_path('app/' . $pokemon->image->path);

        return \Image::make($path)->response();
    }
}
