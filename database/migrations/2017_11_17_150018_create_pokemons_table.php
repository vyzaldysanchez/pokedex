<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePokemonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'pokemons', 
            function (Blueprint $table) {
                $table->increments('id');
                $table->text('description');
                $table->boolean('is_private');
                $table->integer('type_id');
                $table->integer('location_id');
                $table->integer('gallery_id');
                $table->integer('user_id');
                $table->timestamps();
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
        Schema::dropIfExists('pokemons');
    }
}
