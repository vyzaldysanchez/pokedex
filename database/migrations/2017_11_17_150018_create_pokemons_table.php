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
                $table->string('name');
                $table->text('description');
                $table->integer('age');
                $table->integer('pounds');
                $table->boolean('public')->default(false);
                $table->boolean('captured')->default(false);
                $table->integer('location_id')->nullable();
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
