<?php

use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
});

Route::middleware(['auth:api'])->group(function () {
    // Precisa estar autenticado e o e-mail ser gmail para conseguir acessar
    Route::post('/agendamentos/find/', 'AgendamentoControlador@index');
    Route::post('/agendamento/edit/{id}', 'AgendamentoControlador@edit');
    Route::post('/agendamento/update/', 'AgendamentoControlador@update');
    Route::post('/agendamento/new/', 'AgendamentoControlador@store');
    Route::delete('/agendamento/{id}', 'AgendamentoControlador@destroy');
    
    
    Route::post('/clientes', 'ClienteControlador@index');
    Route::post('/barbeiros', 'BarbeiroControlador@index');
});

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/barbeiros', 'BarbeiroControlador@index');
Route::get('/clientes', 'ClienteControlador@index');
Route::get('/clientes/{nome}', 'ClienteControlador@buscar');
Route::get('/agendamentos', 'AgendamentoControlador@index');
Route::post('/agendamentos/novo/', 'AgendamentoControlador@store');*/