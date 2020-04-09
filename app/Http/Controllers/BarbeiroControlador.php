<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Barbeiro;

class BarbeiroControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Barbeiro::all(['id','nome','fone','email']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->request->add(['empresa_id' => 1,'user_id' => 1]);
        
        $request->validate([
            'nome'      => 'required|unique:barbeiros'
            ,'fone'     => 'required|unique:barbeiros'
            ,'email'    => 'required|email|unique:barbeiros'
        ]);

        $barbeiro = Barbeiro::create($request->all());

        return response()->json(Barbeiro::find($barbeiro->id),200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return response()->json(Barbeiro::select('id','nome','fone','email')->where('id', $request->id)->get(),200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->request->add(['empresa_id' => 1,'user_id' => 1]);
        
        $request->validate([
            'nome'      => 'required'
            ,'email'        => 'email|nullable'
        ]);

        $barbeiro = Barbeiro::find($request->id);
        
        $barbeiro->nome     = $request->nome;
        $barbeiro->fone     = $request->fone;
        $barbeiro->email    = $request->email;
        
        $barbeiro->save();

        return response()->json(Barbeiro::select('id','nome','fone','email')->where('id', $request->id)->get(),200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $barbeiro = Barbeiro::find($id);
        if (isset($barbeiro)) {
            $barbeiro->delete();
            return 204;
        }
        return response('Not Found!', 404);
    }
}
