<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = ['nome', 'sobrenome', 'apelido', 'cpf', 'fone1', 'email', 'user_id', 'empresa_id'];
}
