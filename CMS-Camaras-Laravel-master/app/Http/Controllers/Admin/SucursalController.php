<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Sucursal;

class SucursalController extends Controller
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
        $sucursales = Sucursal::get();

        return view('admin.sucursal.index', compact( 'producto', 'categorias', 'proveedores', 'sucursales' ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.sucursal.create');
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

        $sucursal = new Sucursal($data );
        $sucursal->save();

        return redirect()->route('admin.sucursales');
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
        $sucursal = Sucursal::findOrFail( $id );

        return view('admin.sucursal.edit', compact( 'sucursal' ));
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
        $sucursal = Sucursal::findOrFail( $id );

        $data = $this->validator( $request );

        $sucursal->fill( $data );
        $sucursal->save();

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
        $sucursal = Sucursal::findOrFail( $id );


        try { 
            $sucursal->delete();

        } catch(\Illuminate\Database\QueryException $e){ 

            return redirect()->back()->withErrors(['El registro no puede ser eliminado por que tiene datos asociados a el.']);
        }


        $sucursal->delete();

        return redirect()->route('admin.sucursales');
    }


    public function validator( $request )
    {
        return $request->validate([
            'nombre'    => 'required|string|max:60', 
            'decripcion' => 'required|string', 
            'direccion' => 'required|string', 
            'localidad' => 'required|string'
        ]);
    }
}
