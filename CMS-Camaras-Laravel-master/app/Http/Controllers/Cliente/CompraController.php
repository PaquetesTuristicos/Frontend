<?php

namespace App\Http\Controllers\Cliente;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Compra;

class CompraController extends Controller
{
    public function index()
    {
    	$compras = Compra::where( 'user_id', '=', \Auth::user()->id )
    		->get();

    	return view('cliente.compra.index', compact( 'compras' ));
    }

    public function show($id)
    {
    	$compra = Compra::where( 'user_id', '=', \Auth::user()->id )
    		->findOrFail( $id );

    	return view('cliente.compra.show', compact( 'compra' ));
    }
}
