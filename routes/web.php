<?php

Route::get('/', 'HomeController@index');
Route::get('/login', 'LoginController@index')->name('login');
Route::view('/register', 'auth.register');
