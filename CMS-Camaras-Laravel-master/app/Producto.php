<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'productos';

    protected $fillable = ([
    	'nombre', 
    	'descripcion', 
    	'precio', 
    	'descuento', 
    	'modelo', 
    	'marca', 
    	'existencia',
        'imagen'
    ]);

    public function categoria()
    {
        return $this->belongsTo('App\Categoria');
    }

    public function proveedor()
    {
        return $this->belongsTo('App\Proveedor');
    }

    public function sucursal()
    {
        return $this->belongsTo('App\Sucursal');
    }


    public function compras()
    {
        return $this->belongsToMany('App\Compra');
    }

    public function setDescripcionAttribute($data)
    {
        return $this->attributes['descripcion'] = htmlentities( $data );
    }

    public function setImagenAttribute($data)
    {
        if ( ! empty( $data ) ) {
            $file = \File::get($data);
            $type = $data->getClientOriginalExtension();
            $nombre = uniqid() . '.' . $type;

            \Storage::disk('public')->put('productos/' . $nombre, $file);
            
            return $this->attributes['imagen'] = $nombre;
        }
    }
}
