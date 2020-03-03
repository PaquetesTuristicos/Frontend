@extends('layouts.admin')

@section('content')

	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h3 class="jumbotron-heading text-uppercase">
				<small>
					Crear cliente
				</small>
			</h3>
		</div>
	</section>


	{{ Form::open( ['route' => 'admin.clientes.store'] ) }}
		@include('admin.cliente.form')

			<div class="btn-group float-right mt-3">
				<a href="{{ route('admin.clientes') }}" 
					class="btn btn-outline-secondary">
					Cancelar
				</a>

				{{ Form::submit( 'Almacenar', [ 'class' => 'btn btn-outline-success' ] ) }}
			</div>
	{{ Form::close() }}

@endsection
