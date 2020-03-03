<div class="form-group">
	{{ Form::label( 'nombre', 'Nombre' ) }}
	
	{{ Form::text( 'nombre', null, [ 'class' => 'form-control', 'autofocus' ] ) }}

	@if ($errors->has('nombre'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('nombre') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'descripcion', 'Descripcion' ) }}
	
	{{ Form::text( 'descripcion', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('descripcion'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('descripcion') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'moneda', 'Moneda' ) }}
	
	{{ Form::text( 'moneda', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('moneda'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('moneda') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'direccion', 'Dirección' ) }}
	
	{{ Form::text( 'direccion', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('direccion'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('direccion') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'localidad', 'Localidad' ) }}
	
	{{ Form::text( 'localidad', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('pagina_web'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('localidad') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'cp', 'Codigo Postal' ) }}
	
	{{ Form::text( 'cp', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('pagina_web'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('cp') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'telefono', 'Telefono' ) }}
	
	{{ Form::text( 'telefono', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('telefono'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('telefono') }}</strong></span>
	@endif
</div>



