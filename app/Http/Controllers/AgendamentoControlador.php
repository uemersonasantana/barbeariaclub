<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Agendamentos;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class AgendamentoControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Agendamentos::all(),200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->dataagendamento!=null)
            $request->dataagendamento = Carbon::createFromFormat('Y-m-d\TH:i:s.uO', $request->dataagendamento)->format('Y-m-d H:i');


        $request->validate([
            'cliente_id'      => 'required'
            ,'dataagendamento'      => 'required|date'
            ,'descricao'        => 'required'
            ,'barbeiro_id'   => 'required'
        ]);
        
        $agendamento = Agendamentos::create($request->all());


        return (new Agendamentos($agendamento))
                ->response()
                ->setStatusCode(201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
