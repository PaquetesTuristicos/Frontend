@extends('layouts.app')

@section('content')
	<div class="testimonials mt-5">
		<div class="container">
			<div class="row align-items-end">

				@foreach( $productos as $producto )
					<!-- Features Item -->
					<div class="col-lg-4 features_col">
						<div class="features_item d-flex flex-column align-items-center justify-content-end text-center">
							<div class="icon_container d-flex flex-column justify-content-end">
								<img class="img-fluid" src="{{ asset('storage/productos/'. $producto->imagen) }}" alt="" style="max-height: 300px;">
							</div>
							<h3>{{ $producto->nombre }}</h3>

							<p class="m-0">Marca: <small>{{ $producto->marca }}</small></p>
							<p class="m-0">Modelo: <small>{{ $producto->modelo }}</small></p>
							<p class="m-0">Precio: <strong>$ {{ $producto->precio }} </strong></p>

							<a href="{{ route('productos.show', $producto->id) }}" class="btn btn-block btn-outline-primary mt-2">
								Ver
							</a>
						</div>
					</div>
				@endforeach

			</div>
		</div>
	</div>
@endsection
