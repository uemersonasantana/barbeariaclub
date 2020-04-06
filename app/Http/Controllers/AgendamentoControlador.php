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
    public function index(Request $request)
    {
        $data = Agendamentos::with('barbeiro','cliente');
        
        if ( $request->cliente_id ) {
            $data->where('cliente_id', '=', $request->cliente_id);
        }
        if ( $request->barbeiro_id ) {
            $data->where('barbeiro_id', '=', $request->barbeiro_id);
        }

        //Carbon::now()->subDays(30);

        switch ($request->tempo) {
            // Dia
            case 1:
                $data->whereDay('dataagendamento', Carbon::now()->format('d'));
                break;
            // Semana
            case 2:
                $data->whereBetween('dataagendamento', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
                break;
            // Mês
            case 3:
                $data->whereMonth('dataagendamento', Carbon::now()->format('m'));
                break;
            // 30 dias
            case 4:
                $data->whereBetween('dataagendamento', [Carbon::now()->subMonth(), Carbon::now()]);
                break;
            // Dia
            case 5:
                $request->validate([
                    'dataInicial'      => 'required',
                    'dataFinal'        => 'required',
                ]);

                // Tratando datas
                $request->merge([
                    'dataInicial' => Carbon::createFromFormat('j/n/Y', $request->dataInicial)->format('Y-m-d'),
                    'dataFinal' => Carbon::createFromFormat('j/n/Y', $request->dataFinal)->format('Y-m-d')
                ]);

                $request->validate([
                    'dataInicial'      => 'before:dataFinal',
                    'dataFinal'        => 'after:dataInicial',
                ]);

                
                $data->whereBetween('dataagendamento', [$request->dataInicial,$request->dataFinal]);
                break;
        }
        
        return response()->json($data->get());
        
        
        //return response()->json(Agendamentos::with('barbeiro','cliente')->get(),200);
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
        // Old Carbon::createFromFormat('Y-m-d\TH:i:s.uO', $request->dataagendamento)->format('Y-m-d H:i')])
        if ($request->dataagendamento!=null)
            $request->merge(['dataagendamento' => Carbon::createFromFormat('j-n-Y H:i', $request->dataagendamento)->format('Y-m-d H:i:s')]);
        
            $request->validate([
            'cliente_id'      => 'required'
            ,'dataagendamento'      => 'required|date'
            ,'descricao'        => 'required'
            ,'barbeiro_id'   => 'required'
        ]);
        
        $agendamento = Agendamentos::create($request->all());


        return response()->json($agendamento,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Agendamentos::find($id);
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
