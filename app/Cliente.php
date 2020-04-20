<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cliente extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['nome', 'sobrenome', 'apelido', 'cpf', 'fone1', 'email', 'endereco_id', 'user_id', 'empresa_id'];

    function endereco() {
        return $this->belongsTo('App\Endereco');
    }
}
