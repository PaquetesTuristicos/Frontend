<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sucursal extends Model
{
    protected $table = 'sucursales';

    protected $fillable = ([
    	'nombre', 
    	'descripcion', 
    	'moneda',
    	'localidad', 
    	'direccion',
    	'cp', 
    	'telefono'
    ]);


    // public function paquetes()
    // {
    //     return $this->belongsToMany('App\Paquete');
    // }
    
    // public function proveedores()
    // {
    //     return $this->belongsToMany('App\Proveedor');
    // }

    // public function productos()
    // {
    // 	return $this->belongsToMany('App\Producto');
    // }

    // public function categorias()
    // {
    // 	return $this->belongsToMany('App\Categoria');
    // }

    // public function admins()
    // {
    // 	return $this->belongsToMany('App\Admin');
    // }
    // public function compras()
    // {
    //     return $this->belongsToMany('App\Compra');
    // }
    
}
