<?php

namespace App\Http\Controllers;

use App\Municipio;

class MunicipioControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($uf_id)
    {
        return response()->json(Municipio::select('id','nome')->where('uf_id', '=', $uf_id)->orderBy('nome','asc')->get(),200);

    }
}