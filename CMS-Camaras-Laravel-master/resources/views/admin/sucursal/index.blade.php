@extends('layouts.admin')

@section('content')
	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h1 class="jumbotron-heading text-uppercase">
				
				<small>
					Sucursales
				</small>
			</h1>
		</div>
	</section>

	<div class="row">
		<div class="col">
			<a href="{{ route('admin.sucursales.create') }}" 
				class="btn btn-outline-success mb-5 float-right rounded-5">
				<i class="fa fa-plus-circle" aria-hidden="true"></i> 
				Crear sucursal

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
							Descripcion
						</th>

						<th>
							Direccion
						</th>

						<th>
							Localidad
						</th>

						<th>
							Telefono
						</th>

						<th class="text-right">
							Opciones
						</th>
					</tr>
				</thead>

				<tbody>
					@foreach( $sucursales as $sucursal )
						<tr>
							<td>{{ $sucursal->id }}</td>
							<td>{{ $sucursal->nombre }}</td>
							<td>{{ $sucursal->descripcion }}</td>
							<td>{{ $sucursal->direccion }}</td>
							<td>{{ $sucursal->localidad }}</td>
							<td>{{ $sucursal->telefono }}</td>

							<td>
								<a href="{{ route('admin.sucursales.edit', $sucursal->id) }}" 
									data-toggle="tooltip" 
									data-placement="top"
									title="Editar" 
									class="btn btn-sm btn-outline-primary">
									<i class="fa fa-pencil" aria-hidden="true"></i>
								</a>

								<a href="{{ route('admin.sucursales.destroy', $sucursal->id) }}" 
									class="btn btn-outline-danger btn-sm"
									data-toggle="tooltip" 
									data-placement="top"
									title="Eliminar" 
									onclick="event.preventDefault(); return confirm('¿Esta seguro que desea eliminar el elemento?') ? document.getElementById( 'sucursal-{{ $sucursal->id }}' ).submit() : ''">
									<i class="fa fa-trash" aria-hidden="true"></i>
								</a>

								<form id="sucursal-{{ $sucursal->id }}" 
									action="{{ route('admin.sucursales.destroy', $sucursal->id) }}" 
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
