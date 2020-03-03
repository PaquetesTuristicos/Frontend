<div class="row">
	<div class="col-xs-6 col-md-7">
		<div class="form-group">
			{{ Form::label( 'nombre', 'Nombre') }}

			{{ Form::text( 'nombre', null, [ 'class' => 'form-control', 'autofocus' ]  ) }}

			@if ($errors->has('nombre'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('nombre') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'apellidos', 'Apellidos') }}

			{{ Form::text( 'apellidos', null, [ 'class' => 'form-control' ]  ) }}

			@if ($errors->has('apellidos'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('apellidos') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( null, 'Sexo') }}

			<div class="form-check">
				{{ Form::radio( 'sexo', '0', null, ['class' => 'form-check-input', 'id' => 'sexo-h'] ) }}

				<label class="form-check-label" for="sexo-h">
					Masculino
				</label>
			</div>

			<div class="form-check mt-2">
				{{ Form::radio( 'sexo', '1', null, ['class' => 'form-check-input', 'id' => 'sexo-m'] ) }}

				<label class="form-check-label" for="sexo-m">
					Femenino
				</label>
			</div>

			@if ($errors->has('sexo'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('sexo') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'fecha_nacimiento', 'Fecha de nacimiento') }}

			<div class="input-group date" id="datetimepicker11">

				{{ Form::text( 'fecha_nacimiento', null, [ 'class' => 'form-control', 'placeholder' => '0000-12-01'] ) }}
				<div class="input-group-append">
					<span class="input-group-text"><i class="fa fa-calendar" aria-hidden="true"></i></span>
				</div>
			</div>

			@if ($errors->has('fecha_nacimiento'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('fecha_nacimiento') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'localidad', 'Localidad') }}

			{{ Form::text( 'localidad', null, [ 'class' => 'form-control' ]  ) }}

			@if ($errors->has('localidad'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('localidad') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'municipio', 'Municipio') }}

			{{ Form::text( 'municipio', null, [ 'class' => 'form-control' ]  ) }}

			@if ($errors->has('municipio'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('municipio') }}</span>
			@endif
		</div>

		<div class="form-row">
			<div class="form-group col-md-8">
				{{ Form::label( 'direccion', 'Dirección') }}

				{{ Form::text( 'direccion', null, [ 'class' => 'form-control' ]  ) }}

				@if ($errors->has('direccion'))
					<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('direccion') }}</span>
				@endif
			</div>

			<div class="form-group col-md">
				{{ Form::label( 'cp', 'CP') }}

				{{ Form::text( 'cp', null, [ 'class' => 'form-control' ]  ) }}

				@if ($errors->has('cp'))
					<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('cp') }}</span>
				@endif
			</div>
		</div>
	</div>

	<div class="col-xs col-md">
		<div class="panel panel-default">
			<div class="panel-body">
			
				<div class="form-group">
					{{ Form::label( 'email', 'Correo electrónico') }}

					{{ Form::email( 'email', null, [ 'class' => 'form-control input-sm' ] ) }}

					@if ($errors->has('email'))
						<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('email') }}</span>
					@endif
				</div>

				<div class="form-group">
					{{ Form::label( 'password', 'Contraseña') }}

					{{ Form::password( 'password', [ 'class' => 'form-control input-sm' ] ) }}

					@if ($errors->has('password'))
						<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('password') }}</span>
					@endif
				</div>

				<div class="form-group">
					{{ Form::label( 'password_confirmation', 'Confirmar contraseña' ) }}

					{{ Form::password( 'password_confirmation', [ 'class' => 'form-control input-sm' ] ) }}

					@if ($errors->has('password_confirmation'))
						<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('password_confirmation') }}</span>
					@endif
				</div>

			</div>
		</div>
	</div>
</div>