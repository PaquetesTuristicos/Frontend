<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Compra;
use App\User;
use App\Producto;

class CompraController extends Controller
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
        $compras = Compra::get();

         return view('admin.compra.index', compact( 'compras' ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clientes   = User::get()->pluck( 'full_name', 'id' )->all();
        $productos  = Producto::get()->pluck( 'nombre', 'id' )->all();

        return view('admin.compra.create', compact( 'clientes', 'productos' ));
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

        $compra = new Compra( $data );
        $compra->total   = $this->getTotal( $data );
        $compra->user_id = $data['user_id'];
        $compra->save();

        $compra->productos()->sync($data['productos']);
        

        return redirect()->route('admin.compras');
    }

    public function getTotal( $data )
    {
        $total = null;

        if ( empty( $data['total'] ) ) 
        {
            foreach ($data['productos'] as $key => $producto_id) 
            {
                $total = $total + $producto = Producto::find( $producto_id )->precio;
            }

            return $total;
        }

        return $data['total'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $compra = Compra::findOrFail( $id );

        return view('admin.compra.show', compact( 'compra' ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $compra     = Compra::findOrFail( $id );
        $clientes   = User::get()->pluck( 'full_name', 'id' )->all();
        $productos  = Producto::get()->pluck( 'nombre', 'id' )->all();

        return view('admin.compra.edit', compact( 'compra', 'clientes', 'productos' ));
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
        $compra  = Compra::findOrFail( $id );

        $data = $this->validator( $request );

        $compra->total   = $this->getTotal( $data );
        $compra->user_id = $data['user_id'];
        $compra->fill( $data );
        $compra->save();

        $compra->productos()->sync($data['productos']);

        return redirect()->route('admin.compras');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function validator($request)
    {
        return $request->validate([
            'user_id'        => 'required|integer|exists:users,id', 
            'total'          => 'numeric|nullable',
            'estado_entrega' => 'required|boolean', 
            'productos'      => 'required|array', 
            'productos.*'    => 'integer|exists:productos,id|distinct'
        ]);
    }
}
