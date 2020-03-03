<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Proveedor;

class ProveedorController extends Controller
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
        $proveedores = Proveedor::get();

        return view('admin.proveedor.index', compact( 'producto', 'categorias', 'proveedores', 'sucursales' ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.proveedor.create');
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

        $proveedor = new Proveedor($data);
        $proveedor->save();

        return redirect()->route('admin.proveedores');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $proveedor = Proveedor::findOrFail( $id );

        return view('admin.proveedor.edit', compact( 'proveedor' ));
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
        $proveedor = Proveedor::findOrFail( $id );

        $data = $this->validator( $request );

        $proveedor->fill( $data );
        $proveedor->save();

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
        $proveedor = Proveedor::findOrFail( $id );


        try { 
            $proveedor->delete();

        } catch(\Illuminate\Database\QueryException $e){ 

            return redirect()->back()->withErrors(['El registro no puede ser eliminado por que tiene datos asociados a el.']);
        }


        $proveedor->delete();

        return redirect()->route('admin.proveedores');
    }


    public function validator( $request )
    {
        return $request->validate([
            'nombre'    => 'required|string|max:60', 
            'direccion' => 'required|string', 
            'telefono' => 'required|string', 
            'pagina_web' => 'required|string'
        ]);
    }
}
