@extends('layouts.admin')

@section('content')
	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h1 class="jumbotron-heading text-uppercase">
				
				<small>
					Proveedores
				</small>
			</h1>
		</div>
	</section>

	<div class="row">
		<div class="col">
			<a href="{{ route('admin.proveedores.create') }}" 
				class="btn btn-outline-success mb-5 float-right rounded-5">
				<i class="fa fa-plus-circle" aria-hidden="true"></i> 
				Crear proveedor

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
							Direccion
						</th>

						<th>
							Telefono
						</th>

						<th>
							Pagina web
						</th>

						<th class="text-right">
							Opciones
						</th>
					</tr>
				</thead>

				<tbody>
					@foreach( $proveedores as $proveedor )
						<tr>
							<td>{{ $proveedor->id }}</td>
							<td>{{ $proveedor->nombre }}</td>
							<td>{{ $proveedor->direccion }}</td>
							<td>{{ $proveedor->telefono }}</td>
							<td><small class="badge">{{ $proveedor->pagina_web }}</small></td>

							<td>
								<a href="{{ route('admin.proveedores.edit', $proveedor->id) }}" 
									data-toggle="tooltip" 
									data-placement="top"
									title="Editar" 
									class="btn btn-sm btn-outline-primary">
									<i class="fa fa-pencil" aria-hidden="true"></i>
								</a>

								<a href="{{ route('admin.proveedores.destroy', $proveedor->id) }}" 
									class="btn btn-outline-danger btn-sm"
									data-toggle="tooltip" 
									data-placement="top"
									title="Eliminar" 
									onclick="event.preventDefault(); return confirm('¿Esta seguro que desea eliminar el elemento?') ? document.getElementById( 'proveedor-{{ $proveedor->id }}' ).submit() : ''">
									<i class="fa fa-trash" aria-hidden="true"></i>
								</a>

								<form id="proveedor-{{ $proveedor->id }}" 
									action="{{ route('admin.proveedores.destroy', $proveedor->id) }}" 
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
