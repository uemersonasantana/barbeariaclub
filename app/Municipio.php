<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $fillable = ['id', 'nome'];

    function uf() {
        return $this->belongsTo('App\Uf');
    }
}
