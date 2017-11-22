<?php

Route::middleware(['auth'])->group(function () {
    Route::get('/', 'HomeController@index');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/login', 'LoginController@index')->name('login');
    Route::view('/register', 'auth.register');
});
