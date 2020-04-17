<?php

namespace App\Http\Controllers;

use App\Uf;

class UfControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Uf::orderBy('nome', 'asc')->get();
    }
}
