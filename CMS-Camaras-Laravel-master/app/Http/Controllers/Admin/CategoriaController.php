<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Categoria;

class CategoriaController extends Controller
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
        $categorias = Categoria::get();

         return view('admin.categoria.index', compact( 'categorias' ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         return view('admin.categoria.create');
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

        $categoria = new Categoria( $data );
        $categoria->save();

        return redirect()->route('admin.categorias');
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
        $categoria = Categoria::findOrFail( $id );

         return view('admin.categoria.edit', compact( 'categoria' ));
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
        $categoria = Categoria::findOrFail( $id );

        $data = $this->validator( $request );

        $categoria->fill( $data );
        $categoria->save();

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
        $categoria = Categoria::findOrFail( $id );


        try { 
            $categoria->delete();

        } catch(\Illuminate\Database\QueryException $e){ 

            return redirect()->back()->withErrors(['El registro no puede ser eliminado por que tiene datos asociados a el.']);
        }


        $categoria->delete();

        return redirect()->route('admin.categorias');
    }

    public function validator( $request )
    {
        return $request->validate([
            'nombre'        => 'required|string', 
            'descripcion'   => 'required|string'
        ]);
    }
}
