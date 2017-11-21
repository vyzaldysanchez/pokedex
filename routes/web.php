<?php
Route::get('/', 'HomeController@index');
Route::redirect('/home', '/');

Route::get('/login', 'Auth\LoginController@index')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout');

Route::get('/register', 'Auth\RegistrationController@index');
Route::post('/register', 'Auth\RegistrationController@register');

Route::get('/password/recover', 'Auth\ForgotPasswordController@index')->name('password.email');
Route::post('/password/recover', 'Auth\ForgotPasswordController@recover');

Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

