<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agendamentos extends Model
{
    use SoftDeletes;

    protected $fillable = ['descricao', 'dataagendamento', 'cliente_id', 'barbeiro_id', 'empresa_id', 'user_id'];

    function barbeiro() {
        return $this->belongsTo('App\Barbeiro')->withTrashed();
    }
    function cliente() {
        return $this->belongsTo('App\Cliente')->withTrashed();
    }
}
