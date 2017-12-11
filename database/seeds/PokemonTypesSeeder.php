<?php

use Illuminate\Database\Seeder;
use App\PokemonType;

class PokemonTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(PokemonType::class, 1)->create(['name' => 'normal', 'color' => '#A8A878']);
        factory(PokemonType::class, 1)->create(['name' => 'fire', 'color' => '#F08030']);
        factory(PokemonType::class, 1)->create(['name' => 'water', 'color' => '#6890F0']);
        factory(PokemonType::class, 1)->create(['name' => 'electric', 'color' => '#F8D030']);
        factory(PokemonType::class, 1)->create(['name' => 'grass', 'color' => '#78C850']);
        factory(PokemonType::class, 1)->create(['name' => 'ice', 'color' => '#98D8D8']);
        factory(PokemonType::class, 1)->create(['name' => 'ground', 'color' => '#E0C068']);
        factory(PokemonType::class, 1)->create(['name' => 'flying', 'color' => '#A890F0']);
        factory(PokemonType::class, 1)->create(['name' => 'ghost', 'color' => '#705898']);
        factory(PokemonType::class, 1)->create(['name' => 'rock', 'color' => '#B8A038']);
        factory(PokemonType::class, 1)->create(['name' => 'fighting', 'color' => '#C03028']);
        factory(PokemonType::class, 1)->create(['name' => 'poison', 'color' => '#A040A0']);
        factory(PokemonType::class, 1)->create(['name' => 'psychic', 'color' => '#F85888']);
        factory(PokemonType::class, 1)->create(['name' => 'bug', 'color' => '#A8B820']);
        factory(PokemonType::class, 1)->create(['name' => 'dark', 'color' => '#705848']);
        factory(PokemonType::class, 1)->create(['name' => 'steel', 'color' => '#B8B8D0']);
        factory(PokemonType::class, 1)->create(['name' => 'dragon', 'color' => '#7038F8']);
        factory(PokemonType::class, 1)->create(['name' => 'fairy', 'color' => '#D685AD']);
        factory(PokemonType::class, 1)->create(['name' => 'unknown', 'color' => '#68A090']);
    }
}
