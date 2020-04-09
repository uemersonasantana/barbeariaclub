<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Cliente;

class ClienteControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cliente::all(['id', 'nome', 'sobrenome', 'apelido', 'cpf', 'fone1', 'email']);
    }

    public function buscar($nome)
    {
        return Cliente::where('nome', 'like', '%'.$nome.'%')
                            ->orWhere('sobrenome', 'like', '%'.$nome.'%')
                            ->get(['id','apelido','nome','sobrenome']);
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
        
        // Verifica se já existe o mesmo cliente na tabela.
        $sobrenome = $request->sobrenome;
        $request->validate([
            //'nome'      => 'required|uniqueFirstAndLastName:{$request->sobrenome}'
            'nome'   => [
                Rule::unique('clientes', 'nome')->where(function ($query) use ($sobrenome) {
                    return $query->where('sobrenome', $sobrenome);
                })]
        ]);

        $cliente = Cliente::create($request->all());

        return response()->json(Cliente::select('id','nome','sobrenome')->where('id', $cliente->id)->get(),200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return response()->json(Cliente::select('id','nome','sobrenome')->where('id', $request->id)->get(),200);
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
        
        // Verifica se já existe o mesmo cliente na tabela.
        $sobrenome = $request->sobrenome;
        $request->validate([
            //'nome'      => 'required|uniqueFirstAndLastName:{$request->sobrenome}'
            'nome'   => [
                Rule::unique('clientes', 'nome')->where(function ($query) use ($sobrenome) {
                    return $query->where('sobrenome', $sobrenome);
                })]
        ]);

        $cliente = Cliente::find($request->id);
        
        $cliente->nome     = $request->nome;
        $cliente->sobrenome     = $request->sobrenome;
        
        $cliente->save();

        return response()->json(Cliente::select('id','nome','sobrenome')->where('id', $request->id)->get(),200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cliente = Cliente::find($id);
        if (isset($cliente)) {
            $cliente->delete();
            return 204;
        }
        return response('Not Found!', 404);
    }
}
