<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Producto;
use App\Categoria;
use App\Proveedor;
use App\Sucursal;

class ProductoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Producto::get();

         return view('admin.producto.index', compact( 'productos' ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categorias  = Categoria::get()->pluck( 'nombre', 'id' )->all();
        $proveedores = Proveedor::get()->pluck( 'nombre', 'id' )->all();
        $sucursales  = Sucursal::get()->pluck( 'nombre', 'id' )->all();

         return view('admin.producto.create', compact( 'categorias', 'proveedores', 'sucursales' ));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->validator( $request );

        $producto = new Producto( $data );
        $producto->categoria_id = $data['categoria_id'];
        $producto->proveedor_id = $data['proveedor_id'];
        $producto->sucursal_id = $data['sucursal_id'];
        $producto->save();

        return redirect()->route('admin.productos');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $producto = Producto::findOrFail( $id );

        $categorias  = Categoria::get()->pluck( 'nombre', 'id' )->all();
        $proveedores = Proveedor::get()->pluck( 'nombre', 'id' )->all();
        $sucursales  = Sucursal::get()->pluck( 'nombre', 'id' )->all();

         return view('admin.producto.edit', compact( 'producto', 'categorias', 'proveedores', 'sucursales' ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $producto = Producto::findOrFail( $id );

        $data = $this->validator( $request );

        $producto->fill( $data );
        $producto->categoria_id = $data['categoria_id'];
        $producto->proveedor_id = $data['proveedor_id'];
        $producto->sucursal_id    = $data['sucursal_id'];
        $producto->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producto = Producto::findOrFail( $id );


        try { 
            $producto->delete();

        } catch(\Illuminate\Database\QueryException $e){ 

            return redirect()->back()->withErrors(['El registro no puede ser eliminado por que tiene datos asociados a el.']);
        }

        return redirect()->route('admin.productos');
    }

    public function validator( $request )
    {
        return $request->validate([
            'nombre'        => 'required|string',
            'descripcion'   => 'string|nullable',
            'precio'        => 'required|numeric', 
            'descuento'     => 'numeric|nullable', 
            'modelo'        => 'required|string', 
            'marca'         => 'required|string', 
            'existencia'    => 'integer|nullable', 
            'imagen' => 'mimes:jpeg,png|nullable', 

            'categoria_id'  => 'required|integer|exists:categorias,id',
            'proveedor_id'  => 'required|integer|exists:proveedores,id',
            'sucursal_id'     => 'required|integer|exists:sucursales,id',

        ]);
    }
}
