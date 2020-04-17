<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = ['nome', 'sobrenome', 'apelido', 'cpf', 'fone1', 'email', 'endereco_id', 'user_id', 'empresa_id'];

    function endereco() {
        return $this->belongsTo('App\Endereco');
    }
}
