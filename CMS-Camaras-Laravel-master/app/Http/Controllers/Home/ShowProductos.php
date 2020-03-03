<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Producto;

class ShowProductos extends Controller
{
    public function __invoke()
    {
    	$productos = Producto::get();

    	return view('productos', compact( 'productos' ));
    }
}
