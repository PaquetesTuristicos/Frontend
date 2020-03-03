<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Producto;

class ShowProducto extends Controller
{
    public function __invoke($id)
    {
    	$producto = Producto::findOrFail( $id );

    	return view('producto', compact( 'producto' ));
    }
}
