<?php
Route::get('/', 'HomeController@index');
Route::redirect('/home', '/');
Route::get('/login', 'LoginController@index')->name('login');
Route::get('/logout', 'LoginController@logout');
Route::get('/register', 'RegistrationController@index');
Route::post('/register', 'RegistrationController@register');
