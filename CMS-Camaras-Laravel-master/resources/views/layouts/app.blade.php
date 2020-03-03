<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

	<link rel="stylesheet" type="text/css" href="{{ asset('styles/bootstrap4/bootstrap.min.css') }}">
	<link href="{{ asset('plugins/fontawesome-free-5.0.1/css/fontawesome-all.css') }}" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="{{ asset('plugins/OwlCarousel2-2.2.1/owl.carousel.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('plugins/OwlCarousel2-2.2.1/owl.theme.default.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('plugins/OwlCarousel2-2.2.1/animate.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('styles/main_styles.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('styles/responsive.css') }}">
</head>
<body>
<!--<div class="super_container">-->
	<!-- Header -->
	<header class="header d-flex flex-row justify-content-end align-items-center">

		<!-- Logo -->
		<div class="logo_container mr-auto">
			<div class="logo">
				<a href="#"><span>C</span>Camaras<span>.</span></a>
			</div>
		</div>

		<!-- Main Navigation -->
		<nav class="main_nav justify-self-end">
			<ul class="nav_items">
				<li class="{{ Request::is(['/', 'home']) ? 'active' : '' }}">
					<a href="{{ route('home') }}">
						<span>
							Inicio
						</span>
					</a>
				</li>

				<li class="{{ Request::is(['productos', 'productos/*']) ? 'active' : '' }}">
					<a href="{{ route('productos') }}">
						<span>
							Productos
						</span>
					</a>
				</li>

				@if(Auth::guard('web')->check())
				<li>
					<a href="{{ route('cliente.home') }}">
						<span>
							Cliente
						</span>
					</a>
				</li>
				@else
				<li class="{{ Request::is(['cliente/login']) ? 'active' : '' }}">
					<a href="{{ route('login') }}">
						<span>
							Iniciar Sesión
						</span>
					</a>
				</li>

				<li class="{{ Request::is(['cliente/register']) ? 'active' : '' }}">
					<a href="{{ route('register') }}">
						<span>
							Registro
						</span>
					</a>
				</li>
				@endif
			</ul>
		</nav>

		<!-- Hamburger -->
		<div class="hamburger_container">
			<span class="hamburger_text">Menu</span>
			<span class="hamburger_icon"></span>
		</div>

	</header>


	<!-- Menu -->

	<div class="fs_menu_overlay"></div>
	<div class="fs_menu_container">
		<div class="fs_menu_shapes"><img src="{{ asset('images/menu_shapes.png') }}" alt=""></div>
		<nav class="fs_menu_nav">
			<ul class="fs_menu_list">
				<li><a href="{{ route('home') }}"><span><span>H</span>Inicio</span></a></li>
				<li><a href="{{ route('productos') }}"><span><span>P</span>Productos</span></a></li>
				<li><a href="{{ route('login') }}"><span><span>I</span>Iniciar Sesión</span></a></li>
				<li><a href="{{ route('register') }}"><span><span>R</span>Registro</span></a></li>
			</ul>
		</nav>

	</div>

	@yield('content')

	<!-- Footer -->

	<footer class="footer">
		<div class="container">
			<div class="row footer_content d-flex flex-sm-row flex-column align-items-center">
				<div class="col-sm-6 cr text-sm-left text-center">

				</div>
				<div class="col-sm-6 text-sm-right text-center">
					@if(Auth::guard('admin')->check())
						<a href="{{ route('admin.home') }}" class="">Panel de Control</a>
					@else
						<a href="{{ route('admin.login') }}" class"">Administrador</a>
					@endif
					
					<div class="footer_social_container">
						<ul class="footer_social">
							<li><a href="#"><i class="fab fa-pinterest trans_300"></i></a></li>
							<li><a href="#"><i class="fab fa-facebook-f trans_300"></i></a></li>
							<li><a href="#"><i class="fab fa-twitter trans_300"></i></a></li>
							<li><a href="#"><i class="fab fa-dribbble trans_300"></i></a></li>
							<li><a href="#"><i class="fab fa-behance trans_300"></i></a></li>
							<li><a href="#"><i class="fab fa-linkedin-in trans_300"></i></a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	</footer>

<!--</div>-->
    

	<script src="{{ asset('js/jquery-3.2.1.min.js') }}"></script>
	<script src="{{ asset('styles/bootstrap4/popper.js') }}"></script>
	<script src="{{ asset('styles/bootstrap4/bootstrap.min.js') }}"></script>
	<script src="{{ asset('plugins/greensock/TweenMax.min.js') }}"></script>
	<script src="{{ asset('plugins/greensock/TimelineMax.min.js') }}"></script>
	<script src="{{ asset('plugins/scrollmagic/ScrollMagic.min.js') }}"></script>
	<script src="{{ asset('plugins/greensock/animation.gsap.min.js') }}"></script>
	<script src="{{ asset('plugins/greensock/ScrollToPlugin.min.js') }}"></script>
	<script src="{{ asset('plugins/progressbar/progressbar.min.js') }}"></script>
	<script src="{{ asset('plugins/OwlCarousel2-2.2.1/owl.carousel.js') }}"></script>
	<script src="{{ asset('plugins/easing/easing.js') }}"></script>
	<script src="{{ asset('js/custom.js') }}"></script>
</body>
</html>