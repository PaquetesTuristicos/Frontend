@extends('layouts.cliente')

@section('content')

	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h3 class="jumbotron-heading text-uppercase">
				<small>
					Compra
				</small>
			</h3>
		</div>
	</section>

	<a href="{{ route('cliente.compras') }}" class="btn btn-outline-warning btn-block mb-5">
		Regresar
	</a>

	<div class="container">
		<div class="row">
			<div class="col">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Id de compra: <span class="float-right">{{ $compra->id }}</span></li>
					<li class="list-group-item">Total: <span class="float-right">$ {{ $compra->total }} MXN</span></li>

					<li class="list-group-item">
						Estado de entrega: 

						<span class="float-right">
							<small class="badge badge-success">
								@if( $compra->estado_entrega )
									Entregado
								@else
									Pendiente
								@endif
							</small>
						</span>
					</li>

					<li class="list-group-item">Fecha de registro: <span class="float-right">{{ $compra->created_at }}</span></li>
					<li class="list-group-item">Fecha de edición: <span class="float-right">{{ $compra->updated_at }}</span></li>
				</ul>
			</div>

			<!--
			<div class="col">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Cliente <small>que realizo la compra</small>: <span class="float-right">{{ $compra->user->nombre . ' ' . $compra->user->apellidos }}</span></li>

					<li class="list-group-item">
						Sexo: 

						<span class="float-right">
							<small class="badge badge-danger">
								@if( $compra->user->sexo )
									Femenino
								@else
									Masculino
								@endif
							</small>
						</span>
					</li>

					<li class="list-group-item">Localidad: <span class="float-right">{{ $compra->user->localidad }}</span></li>
					<li class="list-group-item">Municipio: <span class="float-right">{{ $compra->user->municipio }}</span></li>
					<li class="list-group-item">Direccion: <span class="float-right">{{ $compra->user->direccion }}</span></li>
					<li class="list-group-item">CP: <span class="float-right">{{ $compra->user->cp }}</span></li>
					<li class="list-group-item">Correo electrónico: <span class="float-right">{{ $compra->user->email }}</span></li>
				</ul>
			</div>
			-->
		</div>
	</div>

	<section class="jumbotron text-white bg-dark text-center p-3 mt-5">
		<div class="container">
			<h5 class="jumbotron-heading text-uppercase">
				Productos
				<small>
					comprados
				</small>
			</h5>
		</div>
	</section>

	<div class="card-group mt-1">
		@foreach( $compra->productos as $producto )
			<div class="card">
				<!--<img class="card-img-top" src="..." alt="Card image cap">-->
				<div style="max-width:400px; display: inline-block; margin: 0 auto;">
					<img class="img-fluid" src="{{ asset('storage/productos/'. $producto->imagen) }}" alt="">
				</div>
				
				<div class="card-body">
					<h6 class="card-title">{{ $producto->nombre }}</h6>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Precio: <span class="float-right">$ {{ $producto->precio }} MXN</span></li>
						<li class="list-group-item">Descuento: <span class="float-right">{{ $producto->descuento }}</span></li>
						<li class="list-group-item">Modelo: <span class="float-right">{{ $producto->modelo }}</span></li>
						<li class="list-group-item">Marca: <span class="float-right">{{ $producto->marca }}</span></li>
					</ul>
				</div>
			</div>
		@endforeach

	</div>


@endsection
