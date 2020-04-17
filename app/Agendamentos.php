<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agendamentos extends Model
{
    protected $fillable = ['descricao', 'dataagendamento', 'cliente_id', 'barbeiro_id', 'empresa_id', 'user_id'];

    function barbeiro() {
        return $this->belongsTo('App\Barbeiro');
    }
    function cliente() {
        return $this->belongsTo('App\Cliente');
    }
}
