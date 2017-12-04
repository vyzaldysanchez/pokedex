<?php

Route::middleware(['auth'])->group(function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::redirect('/home', '/');
    Route::redirect('/pokemons', '/');
    Route::view('/account/edit', 'home.index');
    Route::view('/pokemons/add', 'home.index');

    Route::prefix('api')->group(function () {
        Route::resource('/user', 'Auth\SessionsController');

        Route::get('/pokemons/types', 'PokemonTypesController@index');
        Route::get('/pokemons/{pokemon}/image', 'PokemonsImagesController@find');
        Route::resource('/pokemons', 'PokemonsController');
    });

    Route::put('/users/edit/', 'Auth\RegistrationController@update');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/login', 'Auth\LoginController@index')->name('login');
    Route::post('/login', 'Auth\LoginController@login');

    Route::get('/register', 'Auth\RegistrationController@index');
    Route::post('/register', 'Auth\RegistrationController@register');

    Route::get('/password/recover', 'Auth\ForgotPasswordController@index')->name('password.email');
    Route::post('/password/recover', 'Auth\ForgotPasswordController@recover');

    Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.reset');
});

Route::get('/logout', 'Auth\LoginController@logout');
