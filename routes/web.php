<?php
Route::get('/', 'HomeController@index');
Route::get('/login', 'LoginController@index')->name('login');
Route::get('/register', 'RegistrationController@index');
Route::post('/register', 'RegistrationController@register');
