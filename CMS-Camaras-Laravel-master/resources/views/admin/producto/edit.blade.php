@extends('layouts.admin')

@section('content')

	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h3 class="jumbotron-heading text-uppercase">
				<small>
					Editar producto
				</small>
			</h3>
		</div>
	</section>


	{{ Form::model( $producto, ['route' => ['admin.productos.update', $producto->id], 'enctype' => 'multipart/form-data'] ) }}
		@include('admin.producto.form')

			<div class="btn-group float-right mt-3">
				<a href="{{ route('admin.productos') }}" 
					class="btn btn-outline-secondary">
					Regresar
				</a>

				{{ Form::submit( 'Actualizar', [ 'class' => 'btn btn-outline-success' ] ) }}
			</div>
	{{ Form::close() }}

@endsection
