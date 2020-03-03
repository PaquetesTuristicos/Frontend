@extends('layouts.admin')

@section('content')
	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h1 class="jumbotron-heading text-uppercase">
				
				<small>
					Categorias
				</small>
			</h1>
		</div>
	</section>

	<div class="row">
		<div class="col">
			<a href="{{ route('admin.categorias.create') }}" 
				class="btn btn-outline-success mb-5 float-right rounded-5">
				<i class="fa fa-plus-circle" aria-hidden="true"></i> 
				Crear categoria

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
							Descripción
						</th>

						<th class="text-right">
							Opciones
						</th>
					</tr>
				</thead>

				<tbody>
					@foreach( $categorias as $categoria )
						<tr>
							<td>{{ $categoria->id }}</td>
							<td>{{ $categoria->nombre }}</td>
							<td><small class="badge">{{ $categoria->descripcion }}</small></td>
							<td>
								<a href="{{ route('admin.categorias.edit', $categoria->id) }}" 
									class="btn btn-sm btn-outline-primary"
									data-toggle="tooltip" 
									data-placement="top"
									title="Editar" >
									<i class="fa fa-pencil" aria-hidden="true"></i>
								</a>

								<a href="{{ route('admin.categorias.destroy', $categoria->id) }}" 
									class="btn btn-outline-danger btn-sm"
									data-toggle="tooltip" 
									data-placement="top"
									title="Eliminar" 
									onclick="event.preventDefault(); return confirm('¿Esta seguro que desea eliminar el elemento?') ? document.getElementById( 'categoria-{{ $categoria->id }}' ).submit() : ''">
									<i class="fa fa-trash" aria-hidden="true"></i>
								</a>

								<form id="categoria-{{ $categoria->id }}" 
									action="{{ route('admin.categorias.destroy', $categoria->id) }}" 
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
