<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/barbeiros', 'BarbeiroControlador@index');
Route::get('/clientes', 'ClienteControlador@index');
Route::get('/clientes/{nome}', 'ClienteControlador@buscar');
Route::get('/agendamentos', 'AgendamentoControlador@index');
Route::post('/agendamentos/novo/', 'AgendamentoControlador@store');