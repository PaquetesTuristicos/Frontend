<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores';

    protected $fillable = ([
    	'nombre', 
    	'direccion', 
    	'telefono',
    	'pagina_web'
    ]);

    public function paquetes()
    {
        return $this->belongsToMany('App\Paquete');
    }

    
    public function sucursals()
    {
        return $this->belongsToMany('App\Tienda');
    }
    
}
