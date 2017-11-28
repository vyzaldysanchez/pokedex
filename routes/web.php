<?php

Route::middleware(['auth'])->group(function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::redirect('/home', '/');

    Route::prefix('api')->group(function () {
        Route::resource('/user', 'Auth\SessionsController');

        Route::resource('/pokemons/types', 'PokemonTypesController');
    });

    Route::put('/account/edit/{user}', 'Auth\RegistrationController@update');
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
