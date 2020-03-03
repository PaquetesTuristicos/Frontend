<div class="row">
	<div class="col-sm-12 col-md-7">
		<div class="form-group">
			{{ Form::label( 'nombre', 'Nombre' ) }}

			{{ Form::text('nombre', null, ['class' => 'form-control', 'autofocus']) }}

			@if ($errors->has('nombre'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('nombre') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'modelo', 'Modelo' ) }}

			{{ Form::text('modelo', null, ['class' => 'form-control']) }}

			@if ($errors->has('modelo'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('modelo') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'marca', 'Marca' ) }}

			{{ Form::text('marca', null, ['class' => 'form-control']) }}

			@if ($errors->has('marca'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('marca') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'descripcion', 'Descripción' ) }}

			{{ Form::textarea('descripcion') }}
		</div>
	</div>

	<div class="col-sm-12 col-md-5">
		<div class="form-group">
			{{ Form::label( 'sucursal_id', 'Sucursal' ) }}

			{{ Form::select( 'sucursal_id', $sucursales, Request::input('sucursal'), [ 'class' => 'form-control', 'placeholder' => 'Seleccione una sucursal' ] ) }}

			@if ($errors->has('sucursal_id'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('sucursal_id') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'proveedor_id', 'Proveedor' ) }}

			{{ Form::select( 'proveedor_id', $proveedores, Request::input('proveedor'), [ 'class' => 'form-control', 'placeholder' => 'Seleccione una proveedor' ] ) }}

			@if ($errors->has('proveedor_id'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('proveedor_id') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'categoria_id', 'Categoria' ) }}

			{{ Form::select( 'categoria_id', $categorias, Request::input('categoria'), [ 'class' => 'form-control', 'placeholder' => 'Seleccione una categoria' ] ) }}

			@if ($errors->has('categoria_id'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('categoria_id') }}</span>
			@endif
		</div>

		<div class="form-group">
			{{ Form::label( 'imagen', 'Imagen' ) }}


			@isset($producto->imagen)
				<p class="text-muted">{{ $producto->imagen }}</p>
			@endisset

			{{ Form::file('imagen') }}

			<small class="form-text text-muted">Tamaño recomendado: 0px 0px</small>

			@if ($errors->has('imagen'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('imagen') }}</span>
			@endif
		</div>
	</div>
</div>

<div class="form-row mb-4">
	<div class="col-sm-12 col-md-4">
		<div class="form-group">
			{{ Form::label( 'precio', 'Precio' ) }}

			<div class="input-group">
				 <div class="input-group-prepend">
					<span class="input-group-text">$</span>
				</div>

				{{ Form::text( 'precio', null, [ 'class' => 'form-control text-center', 'placeholder' => '0.00' ] ) }}

				 <div class="input-group-append">
					<span class="input-group-text">MXN</span>
				</div>
			</div><!-- End .input-group -->

			@if ($errors->has('precio'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('precio') }}</span>
			@endif
		</div>
	</div>

	<div class="col-sm-12 col-md-4">
		<div class="form-group">
			{{ Form::label( 'descuento', 'Descuento' ) }}
			<div class="input-group">
				{{ Form::number( 'descuento', null, [ 'class' => 'form-control text-center', 'placeholder' => 'Deshabilitado', 'min' => '1', 'max' => '100' ] ) }}

				 <div class="input-group-append">
					<span class="input-group-text">%</span>
				</div>
			</div><!-- End .input-group -->

			@if ($errors->has('descuento'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('descuento') }}</span>
			@endif
		</div>
	</div>

	<div class="col-sm-12 col-md-4">
		<div class="form-group">
			{{ Form::label( 'existencia', 'Existencia' ) }}
			{{ Form::number( 'existencia', null, [ 'class' => 'form-control text-center', 'min' => '1', 'placeholder' => 'Ilimitado' ] ) }}

			@if ($errors->has('existencia'))
				<span class="badge badge-danger animated fadeInUp mt-2">{{ $errors->first('existencia') }}</span>
			@endif
		</div>
	</div>
</div>

@section('javascript')
	<script type="text/javascript" src="{{ asset('js/tinymce/tinymce.min.js') }}"></script>
@endsection

@section('script')
	tinymce.init({ selector:'textarea', plugins: 'preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',
	  toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
	  image_advtab: true });

		$('div.custom-file .custom-file-input').on('change',function(e){
			$(this).parent().find('.custom-file-label').html($(this).val().match(/[^\\/]*$/)[0])

			addImage(e);
		})

		 function addImage(e){
		  var file = e.target.files[0],
		  imageType = /image.*/;
		
		  if (!file.type.match(imageType))
		   return;
	  
		  var reader = new FileReader();
		  reader.onload = fileOnload;
		  reader.readAsDataURL(file);
		 }
	  
		 function fileOnload(e) {
		  var result=e.target.result;
		  $('.imgSalida').attr("src",result);
		 }
@endsection