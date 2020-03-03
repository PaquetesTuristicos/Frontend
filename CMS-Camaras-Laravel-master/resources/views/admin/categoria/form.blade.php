<div class="form-group">
	{{ Form::label( 'nombre', 'Nombre' ) }}
	
	{{ Form::text( 'nombre', null, [ 'class' => 'form-control', 'autofocus' ] ) }}

	@if ($errors->has('nombre'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('nombre') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'descripcion', 'Descripción' ) }}
	
	{{ Form::text( 'descripcion', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('descripcion'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('descripcion') }}</strong></span>
	@endif
</div>