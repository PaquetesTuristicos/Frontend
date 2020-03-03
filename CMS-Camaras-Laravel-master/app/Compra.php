<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    protected $table = 'compras';

    protected $fillable = [
    	'estado_entrega'
    ];

    public function productos()
    {
        return $this->belongsToMany('App\Producto');
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
