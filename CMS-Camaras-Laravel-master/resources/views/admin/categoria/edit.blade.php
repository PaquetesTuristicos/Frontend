@extends('layouts.admin')

@section('content')

	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h3 class="jumbotron-heading text-uppercase">
				<small>
					Editar categoria
				</small>
			</h3>
		</div>
	</section>


	{{ Form::model( $categoria, ['route' => ['admin.categorias.update', $categoria->id]] ) }}
		@include('admin.categoria.form')

			<div class="btn-group float-right mt-3">
				<a href="{{ route('admin.categorias') }}" 
					class="btn btn-outline-secondary">
					Regresar
				</a>

				{{ Form::submit( 'Actualizar', [ 'class' => 'btn btn-outline-success' ] ) }}
			</div>
	{{ Form::close() }}

@endsection
