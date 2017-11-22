<?php
Route::get('/', 'HomeController@index');
Route::redirect('/home', '/');
Route::get('/login', 'Auth\LoginController@index')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout');
Route::get('/register', 'Auth\RegistrationController@index');
Route::post('/register', 'Auth\RegistrationController@register');
