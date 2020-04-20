<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Barbeiro extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['nome', 'fone', 'email', 'empresa_id', 'user_id'];
}
