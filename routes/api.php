<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    //Route::post('me', 'AuthController@me');
    Route::get('me', function () {
        $user = JWTAuth::parseToken()->toUser();

        return response()->json(compact('user'));
    });
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');

    Route::post('refreshtoken', function(){
        try {
            $token = JWTAuth::parseToken()->refresh();
            return response()->json(compact('token'));
        }catch (JWTException $exception){
            return response()->json(['error' => 'token_invalid'],400);
        }
    });
});

Route::middleware(['auth:api'])->group(function () {
    Route::post('/ufs', 'UfControlador@index');
    Route::get('/municipios/{uf_id}', 'MunicipioControlador@index');
    
    Route::post('/agendamentos/find/', 'AgendamentoControlador@index');
    Route::post('/agendamento/edit/', 'AgendamentoControlador@update');
    Route::post('/agendamento/new/', 'AgendamentoControlador@store');
    Route::delete('/agendamento/{id}', 'AgendamentoControlador@destroy');
    
    Route::post('/barbeiros', 'BarbeiroControlador@index');
    Route::post('/barbeiro/edit/', 'BarbeiroControlador@edit');
    Route::post('/barbeiro/update/', 'BarbeiroControlador@update');
    Route::post('/barbeiro/store/', 'BarbeiroControlador@store');
    Route::delete('/barbeiro/{id}', 'BarbeiroControlador@destroy');

    Route::post('/clientes', 'ClienteControlador@index');
    Route::post('/cliente/edit/', 'ClienteControlador@edit');
    Route::post('/cliente/update/', 'ClienteControlador@update');
    Route::post('/cliente/store/', 'ClienteControlador@store');
    Route::delete('/cliente/{id}', 'ClienteControlador@destroy');
});