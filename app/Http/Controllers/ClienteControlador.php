<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use App\Cliente;
use App\Endereco;

class ClienteControlador extends Controller
{
    protected $regrasEndereco = [
        'numero'       => 'required_without_all:complemento|numeric'
        ,'complemento'  => 'required_without_all:numero'
        ,'bairro'       => 'required_with:logradouro'
        ,'uf_id'        => 'required_with:logradouro'
        ,'municipio_id' => 'required_with:logradouro'
        ,'cep'          => 'required_with:logradouro|numeric'];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cliente::all(['id', 'nome', 'sobrenome', 'apelido', 'cpf', 'fone1', 'fone2', 'email']);
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
        $request->request->add(['empresa_id' => 1,'user_id' => Auth::user()->id]);

        $request->validate([
            'nome'          => 'required'
            ,'cpf'          => 'nullable|cpf|unique:clientes'
            ,'fone1'        => 'nullable|unique:clientes'
            ,'fone2'        => 'nullable|unique:clientes'
            ,'email'        => 'nullable|email|unique:clientes'
        ]);

        // Verifica se já existe o mesmo cliente na tabela.
        $sobrenome = $request->sobrenome;
        $request->validate([
            //'nome'      => 'required|uniqueFirstAndLastName:{$request->sobrenome}'
            'nome'   => [
                Rule::unique('clientes', 'nome')->where(function ($query) use ($sobrenome) {
                    return $query->where('sobrenome', $sobrenome);
                })]
        ]);

        if ( $request->endereco_id or !$request->endereco_id and !empty($request->logradouro) ) {
            $request->validate($this->regrasEndereco);
        }
            
        if ( !empty($request->logradouro) ) {
            $endereco = new Endereco();
            $endereco->logradouro     = $request->logradouro;
            $endereco->numero         = $request->numero;
            $endereco->complemento    = $request->complemento;
            $endereco->bairro         = $request->bairro;
            $endereco->municipio_id   = $request->municipio_id;
            $endereco->cep            = $request->cep;
            $endereco->user_id        = $request->user_id;
            $endereco->save();

            $request->merge(['endereco_id' => $endereco->id]);
        } else {
            $request->merge(['endereco_id' => null]);
        }        

        $cliente = new Cliente();
        $cliente->nome          = $request->nome;
        $cliente->sobrenome     = $request->sobrenome;
        $cliente->apelido       = $request->apelido;
        $cliente->cpf           = $request->cpf;
        $cliente->fone1         = $request->fone1;
        $cliente->fone2         = $request->fone2;
        $cliente->email         = $request->email;
        $cliente->endereco_id   = $request->endereco_id;
        $cliente->empresa_id    = $request->empresa_id;
        $cliente->user_id       = $request->user_id;
        $cliente->save();

        $result = Cliente::
            //with('endereco:id,logradouro,numero,complemento,bairro,cep')
            leftJoin('enderecos as e', 'e.id', 'clientes.endereco_id')
            ->leftJoin('municipios as m', 'm.id', 'e.municipio_id')
            ->where('clientes.id', $cliente->id)->get(
                [
                    'clientes.id'
                    ,'clientes.nome'
                    ,'clientes.sobrenome'
                    ,'clientes.apelido'
                    ,'clientes.cpf'
                    ,'clientes.fone1'
                    ,'clientes.fone2'
                    ,'clientes.email'
                    ,'clientes.endereco_id'

                    ,'e.logradouro'
                    ,'e.numero'
                    ,'e.complemento'
                    ,'e.bairro'
                    ,'e.municipio_id'
                    ,'e.cep'

                    ,'m.uf_id'

                    ,DB::raw("'novo' as modo")
                ]
            );
        return response()->json($result,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $result = Cliente::
            //with('endereco:id,logradouro,numero,complemento,bairro,cep')
            leftJoin('enderecos as e', 'e.id', 'clientes.endereco_id')
            ->leftJoin('municipios as m', 'm.id', 'e.municipio_id')
            ->where('clientes.id', $request->id)->get(
                [
                    'clientes.id'
                    ,'clientes.nome'
                    ,'clientes.sobrenome'
                    ,'clientes.apelido'
                    ,'clientes.cpf'
                    ,'clientes.fone1'
                    ,'clientes.fone2'
                    ,'clientes.email'
                    ,'clientes.endereco_id'

                    ,'e.logradouro'
                    ,'e.numero'
                    ,'e.complemento'
                    ,'e.bairro'
                    ,'e.municipio_id'
                    ,'e.cep'

                    ,'m.uf_id'
                    ,'m.nome as municipio_nome'

                ]
            );
        return response()->json($result,200);
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
        $request->request->add(['empresa_id' => 1,'user_id' => Auth::user()->id]);

        $request->validate([
            'nome'          => 'required'
            ,'cpf'          => 'nullable|cpf|unique:clientes,cpf,'.$request->id
            ,'fone1'        => 'nullable|unique:clientes,fone1,'.$request->id
            ,'fone2'        => 'nullable|unique:clientes,fone2,'.$request->id
            ,'email'        => 'nullable|email|unique:clientes,email,'.$request->id
        ]);

        // Verifica se já existe o mesmo cliente na tabela.
        $sobrenome = $request->sobrenome;
        $id =  $request->id;
        $request->validate([
            //'nome'      => 'required|uniqueFirstAndLastName:{$request->sobrenome}'
            'nome'   => [
                Rule::unique('clientes', 'nome')
                    ->where(function ($query) use ($sobrenome,$id) {
                        return $query->where('sobrenome', $sobrenome)->where('id', '!=' , $id);
                    })
                ]
        ]);
        
        if ( $request->endereco_id or !$request->endereco_id and !empty($request->logradouro) ) {
            $request->validate($this->regrasEndereco);
        }

        if ( $request->endereco_id ) {
            $endereco = Endereco::find($request->endereco_id);
            $endereco->logradouro     = $request->logradouro;
            $endereco->numero         = $request->numero;
            $endereco->complemento    = $request->complemento;
            $endereco->bairro         = $request->bairro;
            $endereco->municipio_id   = $request->municipio_id;
            $endereco->cep            = $request->cep;
            $endereco->user_id        = $request->user_id;
            $endereco->save();
        } else if ( !$request->endereco_id and !empty($request->logradouro) ) {
            $endereco = new Endereco();
            $endereco->logradouro     = $request->logradouro;
            $endereco->numero         = $request->numero;
            $endereco->complemento    = $request->complemento;
            $endereco->bairro         = $request->bairro;
            $endereco->municipio_id   = $request->municipio_id;
            $endereco->cep            = $request->cep;
            $endereco->user_id        = $request->user_id;
            $endereco->save();

            $request->merge(['endereco_id' => $endereco->id]);
        } else {
            $request->merge(['endereco_id' => null]);
        }

        $cliente = Cliente::find($request->id);
        $cliente->nome          = $request->nome;
        $cliente->sobrenome     = $request->sobrenome;
        $cliente->apelido       = $request->apelido;
        $cliente->cpf           = $request->cpf;
        $cliente->fone1         = $request->fone1;
        $cliente->fone2         = $request->fone2;
        $cliente->email         = $request->email;
        $cliente->endereco_id   = $request->endereco_id;
        $cliente->empresa_id    = $request->empresa_id;
        $cliente->user_id       = $request->user_id;
        $cliente->save();

        $result = Cliente::
            //with('endereco:id,logradouro,numero,complemento,bairro,cep')
            leftJoin('enderecos as e', 'e.id', 'clientes.endereco_id')
            ->leftJoin('municipios as m', 'm.id', 'e.municipio_id')
            ->where('clientes.id', $cliente->id)->get(
                [
                    'clientes.id'
                    ,'clientes.nome'
                    ,'clientes.sobrenome'
                    ,'clientes.apelido'
                    ,'clientes.cpf'
                    ,'clientes.fone1'
                    ,'clientes.fone2'
                    ,'clientes.email'
                    ,'clientes.endereco_id'

                    ,'e.logradouro'
                    ,'e.numero'
                    ,'e.complemento'
                    ,'e.bairro'
                    ,'e.municipio_id'
                    ,'e.cep'

                    ,'m.uf_id'
                    ,'m.nome as municipio_nome'

                    ,DB::raw("'editar' as modo")
                ]
            );
        return response()->json($result,200);
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
