<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductoUser extends Model
{
    protected $table = 'producto_user';

    protected $fillable =([
    	'total', 
    	'estado_entrega'
    ]);
}
