@extends('layouts.admin')

@section('content')
	<section class="jumbotron text-white bg-dark text-center p-3">
		<div class="container">
			<h1 class="jumbotron-heading text-uppercase">
				
				<small>
					Compras
				</small>
			</h1>
		</div>
	</section>

	<div class="row">
		<div class="col">
			<a href="{{ route('admin.compras.create') }}" 
				class="btn btn-outline-success mb-5 float-right rounded-5">
				<i class="fa fa-plus-circle" aria-hidden="true"></i> 
				Agregar compra

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
							Nombre del cliente
						</th>

						<th class="text-center">
							Total
						</th>

						<th class="text-center">
							¿Entregado?
						</th>

						<th>
							Fecha de registro
						</th>

						<th>
							Fecha de edicion
						</th>

						<th class="text-right">
							Opciones
						</th>
					</tr>
				</thead>

				<tbody>
					@foreach( $compras as $compra )
						<tr>
							<td><small class="badge">{{ $compra->id }}</small></td>
							<td>{{ $compra->user->nombre . ' ' . $compra->user->apellidos }}</td>
							<td class="text-center"><small class="badge">$ {{ $compra->total }} </small></td>

							<td class="text-center">
								
									@if( $compra->estado_entrega )
									<small class="badge badge-success">SI</small>
									@else
									<small class="badge badge-danger">NO</small>
									@endif	
								
							</td>

							<td><small class="badge">{{ $compra->created_at }}</small></td>
							<td><small class="badge">{{ $compra->updated_at }}</small></td>

							<td>
								<a href="{{ route('admin.compras.show', $compra->id) }}" 
									class="btn btn-sm btn-outline-success"
									data-toggle="tooltip" 
									data-placement="top"
									title="Ver reporte de compra" >
									<i class="fa fa-eye" aria-hidden="true"></i>
								</a>

								<a href="{{ route('admin.compras.edit', $compra->id) }}" class="btn btn-sm btn-outline-primary"
									data-toggle="tooltip" 
									data-placement="top"
									title="Editar" >
									<i class="fa fa-pencil" aria-hidden="true"></i>
								</a>

								<a href="{{ route('admin.compras.destroy', $compra->id) }}" 
									class="btn btn-outline-danger btn-sm"
									data-toggle="tooltip" 
									data-placement="top"
									title="Eliminar" 
									onclick="event.preventDefault(); return confirm('¿Esta seguro que desea eliminar el elemento?') ? document.getElementById( 'compra-{{ $compra->id }}' ).submit() : ''">
									<i class="fa fa-trash" aria-hidden="true"></i>
								</a>

								<form id="compra-{{ $compra->id }}" 
									action="{{ route('admin.compras.destroy', $compra->id) }}" 
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
