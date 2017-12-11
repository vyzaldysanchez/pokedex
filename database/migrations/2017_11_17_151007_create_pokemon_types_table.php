<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePokemonTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'pokemon_types',
            function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->unique();
                $table->string('color')->default('#68A090');
                $table->timestamps();
                $table->softDeletes();
            }
        );

        Schema::create(
            'pokemon_pokemon_type',
            function (Blueprint $table) {
                $table->integer('pokemon_id');
                $table->integer('pokemon_type_id');
                $table->primary(['pokemon_id', 'pokemon_type_id']);
                $table->softDeletes();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pokemon_types');
        Schema::dropIfExists('pokemon_pokemon_type');
    }
}
