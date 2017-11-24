<?php

use Faker\Generator as Faker;
use App\PokemonType;

$factory->define(PokemonType::class, function (Faker $faker) {
    return [
        'name' => $faker->name()
    ];
});
