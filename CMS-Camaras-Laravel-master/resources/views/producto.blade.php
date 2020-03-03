@extends('layouts.app')

@section('content')
	<div class="testimonials">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 offset-lg-0 text-center section_title_dark">
					<h2>{{ $producto->nombre }}</h2>

					<hr />

					<strong>Categoria: </strong> {{ $producto->categoria->nombre }}
					<strong class="ml-5">Precio: </strong> $ {{ $producto->precio }} 
					<strong class="ml-5">Descuento: </strong> {{ $producto->descuento }}
					<strong class="ml-5">Stock: </strong> {{ $producto->existencia }}

				</div>
			</div>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<div class="testimonials_container">
						<div class="testimonials_container_inner"></div>

						<!-- Testimonials Slider -->

						

							<!-- Testimonials Item -->
							<div class="owl-item testimonials_item d-flex flex-column align-items-center justify-content-center text-center">
								<div class="testimonials_content">
									<div style="max-width:400px; display: inline-block; margin: 0 auto;">
										<img class="img-fluid" src="{{ asset('storage/productos/'. $producto->imagen) }}" alt="">
									</div>

									<br />

									{{ $producto->descripcion }}
								</div>
							</div>
						

					</div>
				</div>

			</div>
		</div>
	</div>
@endsection
