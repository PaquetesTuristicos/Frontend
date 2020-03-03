@extends('layouts.admin')

@section('content')
	<section class="jumbotron text-white bg-primary text-center p-3">
		<div class="container">
			<h1 class="jumbotron-heading text-uppercase">
				
				<small>
					Productos
				</small>
			</h1>
		</div>
	</section>

	<div class="row">
		<div class="col">
			<a href="{{ route('admin.productos.create') }}" 
				class="btn btn-outline-success mb-5 float-right rounded-5">
				<i class="fa fa-plus-circle" aria-hidden="true"></i> 
				Crear producto

			</a>
		</div>
	</div>

	<div class="card card-default">
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th>
							ID
						</th>

						<th>
							Nombre
						</th>

						<th>
							Precio
						</th>

						<th class="text-center">
							Modelo
						</th>

						<th>
							Marca
						</th>

						<th>
							Categoria
						</th>

						<th>
							Sucursal
						</th>

						<th class="text-right">
							Opciones
						</th>
					</tr>
				</thead>

				<tbody>
					@foreach( $productos as $producto )
						<tr>
							<td>{{ $producto->id }}</td>
							<td>{{ $producto->nombre }}</td>
							<td><small class="text-center">$ {{ $producto->precio }} $</small></td>
							<td>{{ $producto->modelo }}</td>
							<td>{{ $producto->marca }}</td>
							<td>{{ $producto->categoria->nombre }}</td>
							<td>{{ $producto->sucursal->nombre }}</td>
							<td>
								<a href="{{ route('admin.productos.edit', $producto->id) }}" class="btn btn-sm btn-outline-primary"
									data-toggle="tooltip" 
									data-placement="top"
									title="Editar" >
									<i class="fa fa-pencil" aria-hidden="true"></i>
								</a>

								<a href="{{ route('admin.productos.destroy', $producto->id) }}" 
									class="btn btn-outline-danger btn-sm"
									data-toggle="tooltip" 
									data-placement="top"
									title="Eliminar" 
									onclick="event.preventDefault(); return confirm('¿Esta seguro que desea eliminar el elemento?') ? document.getElementById( 'producto-{{ $producto->id }}' ).submit() : ''">
									<i class="fa fa-trash" aria-hidden="true"></i>
								</a>

								<form id="producto-{{ $producto->id }}" 
									action="{{ route('admin.productos.destroy', $producto->id) }}" 
									method="POST" 
									style="display: none;">
									
									{{ csrf_field() }}
								</form>
							</td>
						</tr>
					@endforeach
				</tbody>
			</table>
		</div>
	</div>
@endsection
