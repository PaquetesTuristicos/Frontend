@extends('layouts.app')

@section('content')

	<div class="features">
		<div class="container">
			<div class="row ">

				<!-- Features Item -->
				<div class="col-md-12 offset-md-3 features_col">
		            <div class="panel panel-default">
		                <div class="panel-body">
		                	<h2 class="">
		                		ADMINISTRADOR
		                	</h2>

		                	<br />

		                    <form class="form-horizontal" method="POST" action="{{ route('admin.login.submit') }}">
		                        {{ csrf_field() }}

		                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
		                            <label for="email" class="col-md-4 control-label">Correo electrónico</label>

		                            <div class="col-md-6">
		                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

		                                @if ($errors->has('email'))
		                                    <span class="help-block">
		                                        <strong>{{ $errors->first('email') }}</strong>
		                                    </span>
		                                @endif
		                            </div>
		                        </div>

		                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
		                            <label for="password" class="col-md-4 control-label">Contraseña</label>

		                            <div class="col-md-6">
		                                <input id="password" type="password" class="form-control" name="password" required>

		                                @if ($errors->has('password'))
		                                    <span class="help-block">
		                                        <strong>{{ $errors->first('password') }}</strong>
		                                    </span>
		                                @endif
		                            </div>
		                        </div>

		                        <div class="form-group">
		                            <div class="col-md-6 col-md-offset-4">
		                                <div class="checkbox">
		                                    <label>
		                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Recordar cuenta
		                                    </label>
		                                </div>
		                            </div>
		                        </div>

		                        <div class="form-group">
		                                <button type="submit" class="btn btn-outline-primary">
		                                    Iniciar sesión
		                                </button>
		                        </div>
		                    </form>
		                </div>
		            </div>

				</div>

			</div>
		</div>
	</div>


@endsection
