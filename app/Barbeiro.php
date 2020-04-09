<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Barbeiro extends Model
{
    protected $fillable = ['nome', 'fone', 'email', 'empresa_id', 'user_id'];
}
