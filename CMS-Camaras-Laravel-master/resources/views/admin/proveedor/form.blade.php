<div class="form-group">
	{{ Form::label( 'nombre', 'Nombre' ) }}
	
	{{ Form::text( 'nombre', null, [ 'class' => 'form-control', 'autofocus' ] ) }}

	@if ($errors->has('nombre'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('nombre') }}</strong></span>
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
	{{ Form::label( 'telefono', 'Telefono' ) }}
	
	{{ Form::text( 'telefono', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('telefono'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('telefono') }}</strong></span>
	@endif
</div>

<div class="form-group">
	{{ Form::label( 'pagina_web', 'Pagina web' ) }}
	
	{{ Form::text( 'pagina_web', null, [ 'class' => 'form-control' ] ) }}

	@if ($errors->has('pagina_web'))
		<span class="badge badge-danger animated fadeInUp mt-2"><strong>{{ $errors->first('pagina_web') }}</strong></span>
	@endif
</div>