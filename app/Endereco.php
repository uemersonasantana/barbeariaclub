<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    protected $fillable = ['rua', 'bairro', 'numero', 'complemento', 'cep'];

    function municipio() {
        return $this->belongsTo('App\Municipio');
    }
}
