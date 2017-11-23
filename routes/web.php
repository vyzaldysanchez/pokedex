<?php
Route::middleware(['auth'])->group(function () {
    Route::get('/', 'HomeController@index');
    Route::get('/', 'HomeController@index');
    Route::redirect('/home', '/');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/login', 'Auth\LoginController@index')->name('login');
    Route::post('/login', 'Auth\LoginController@login');
    Route::get('/logout', 'Auth\LoginController@logout');
    Route::get('/register', 'Auth\RegistrationController@index');
    Route::post('/register', 'Auth\RegistrationController@register');
});
