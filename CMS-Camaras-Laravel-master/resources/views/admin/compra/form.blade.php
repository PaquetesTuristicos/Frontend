@section('css')
	<link rel="stylesheet" type="text/css" href="{{ asset('styles/bootstrap-select.min.css') }}">
@endsection

<div class="form-row mb-1">
	<div class="form-group col">
		{{ Form::label( 'user_id', 'Cliente' ) }}

		{{ Form::select( 'user_id', $clientes, Request::input('cliente'), [ 'class' => 'form-control', 'placeholder' => 'Seleccione el cliente' ] ) }}

		@if ($errors->has('user_id'))
			<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('user_id') }}</span>
		@endif
	</div>

	<div class="form-group col">
		{{ Form::label( 'total', 'Total' ) }}

		<div class="input-group">
			 <div class="input-group-prepend">
				<span class="input-group-text">$</span>
			</div>

			{{ Form::text( 'total', null, [ 'class' => 'form-control text-center', 'placeholder' => '0.00' ] ) }}

			 <div class="input-group-append">
				<span class="input-group-text"></span>
			</div>
		</div><!-- End .input-group -->

		<small class="form-text text-muted">Campo opcional</small>

		@if ($errors->has('total'))
			<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('total') }}</span>
		@endif
	</div>
</div>

<div class="form-group">
	{{ Form::label( null, 'Estado de la entrega') }}

	<div class="form-check">
		{{ Form::radio( 'estado_entrega', '0', null, ['class' => 'form-check-input', 'id' => 'entrega-no'] ) }}

		<label class="form-check-label" for="entrega-no">
			Pendiente
		</label>
	</div>

	<div class="form-check mt-2">
		{{ Form::radio( 'estado_entrega', '1', null, ['class' => 'form-check-input', 'id' => 'entrega-si'] ) }}

		<label class="form-check-label" for="entrega-si">
			Entregado
		</label>
	</div>

	@if ($errors->has('estado_entrega'))
		<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('estado_entrega') }}</span>
	@endif
</div>

<hr />

<div class="form-group">
	{{ Form::label( 'productos', 'Productos' ) }}
	
	{{ Form::select( 'productos[]', $productos, null, [ 'multiple' => true, 'class' => 'form-control selectpicker' ] ) }}

	@if ($errors->has('productos'))
		<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('productos') }}</span>
	@endif
</div>

@section('javascript')
	<script type="text/javascript" src="{{ asset('js/bootstrap-select.min.js') }}"></script>
@endsection