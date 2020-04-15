<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Agendamentos;

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
        
        if ( $request->id ) {
            $data->where('id', '=', $request->id);
        }

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
            // 20 Dias
            case 6:
                $data->whereDate('dataagendamento', Carbon::now()->subDays(20));
                break;
        }
        
        return response()->json($data->orderBy('dataagendamento','desc')->get());
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
        if ($request->dataagendamento!=null)
            $request->merge(['dataagendamento' => Carbon::createFromFormat('Y-m-d\TH:i:s.uO', $request->dataagendamento)->format('Y-m-d H:i:s')]);
        
        $request->validate([
            'cliente_id'      => 'required'
            ,'dataagendamento'      => 'required|date|after:today'
            ,'descricao'        => 'required'
            ,'barbeiro_id'   => 'required'
        ]);
        
        $agendamento = Agendamentos::create($request->all());

        return response()->json(Agendamentos::with('barbeiro','cliente')->where('id', '=', $agendamento->id)->get(['*',DB::raw("'novo' as modo")]),200);
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->merge(['dataagendamento' => Carbon::createFromFormat('Y-m-d\TH:i:s.uO', $request->dataagendamento)->format('Y-m-d H:i:s')]);
        
        $request->validate([
            'cliente_id'      => 'required'
            ,'dataagendamento'      => 'required|date|after:today'
            ,'descricao'        => 'required'
            ,'barbeiro_id'   => 'required'
        ]);

        
        $agendamento = Agendamentos::find($request->id);
        
        $agendamento->id                    = $request->id;
        $agendamento->descricao             = $request->descricao;
        $agendamento->dataagendamento       = $request->dataagendamento;
        $agendamento->cliente_id            = $request->cliente_id;
        $agendamento->barbeiro_id           = $request->barbeiro_id;
        
        $agendamento->save();

        return response()->json(Agendamentos::with('barbeiro','cliente')->where('id', '=', $agendamento->id)->get(['*',DB::raw("'editar' as modo")]),200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $agendamento = Agendamentos::find($id);
        if (isset($agendamento)) {
            $agendamento->delete();
            return 204;
        }
        return response('Not Found!', 404);
    }
}
