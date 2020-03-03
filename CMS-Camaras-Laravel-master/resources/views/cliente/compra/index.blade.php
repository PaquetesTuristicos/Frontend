@extends('layouts.cliente')

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

	<div class="card card-default">
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th>
							ID
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
							<td class="text-center"><small class="badge">$ {{ $compra->total }} MXN</small></td>

							<td class="text-center">
								<small class="badge badge-primary">
									@if( $compra->estado_entrega )
										SI
									@else
										NO
									@endif	
								</small>
							</td>

							<td><small class="badge">{{ $compra->created_at }}</small></td>
							<td><small class="badge">{{ $compra->updated_at }}</small></td>

							<td>
								<a href="{{ route('cliente.compras.show', $compra->id) }}" 
									class="btn btn-sm btn-outline-success"
									data-toggle="tooltip" 
									data-placement="top"
									title="Ver reporte de compra" >
									<i class="fa fa-eye" aria-hidden="true"></i>
								</a>
							</td>
						</tr>
					@endforeach
				</tbody>
			</table>
		</div>
	</div>
@endsection