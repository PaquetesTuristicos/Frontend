@extends('layouts.app')

@section('content')

	<!-- Hero Slider -->
	
	<div class="home">
		<div class="hero_slider_container slider_prlx">
			<div class="owl-carousel owl-theme hero_slider">

				<!-- Slider Item -->
				<div class="owl-item main_slider_item">
					<div class="main_slider_item_bg" style="background-image:url(images/main_slider_1.jpg)"></div>
					<div class="main_slider_shapes"><img src="images/main_slider_shapes.png" alt="" style="width: 100% !important;"></div>
					<div class="container">
						<div class="row">
							<div class="col slider_content_col">
								<div class="main_slider_content">
									<h1>Necesita una camara </h1>
									<h1><span>moderna</span> ahora?</h1>
									<p>Tenemos todo lo necesario para ti. </p>
									<div class="button discover_button">
										<a href="{{ route('productos') }}" class="d-flex flex-row align-items-center justify-content-center">Explorar<img src="images/arrow_right.svg" alt=""></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<!-- Slider Dots -->

			<div class="main_slider_dots">
				<div class="container">
					<div class="row">
						<div class="col">
							<ul id="main_slider_custom_dots" class="main_slider_custom_dots">
								<li class="main_slider_custom_dot active">01.</li>
								<li class="main_slider_custom_dot">02.</li>
								<li class="main_slider_custom_dot">03.</li>
							</ul>
						</div>
					</div>
				</div>		
			</div>

			<!-- Slider Dots -->

			<div class="main_slider_nav_left main_slider_nav">
				<i class="fas fa-chevron-left trans_300"></i>
			</div>

			<div class="main_slider_nav_right main_slider_nav">
				<i class="fas fa-chevron-right trans_300"></i>
			</div>

		</div>
	</div>
		
	<!-- Features -->

	<div class="features">
		<div class="container">
			<div class="row align-items-end">

				<!-- Features Item -->
				<div class="col-lg-4 features_col">
					<div class="features_item d-flex flex-column align-items-center justify-content-end text-center">
						<!-- <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
						<div class="icon_container d-flex flex-column justify-content-end">
							<img src="images/icon_1.svg" alt="">
						</div>
						<h3>Diseño moderno</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis ultrices.</p>
					</div>
				</div>
				
				<!-- Features Item -->
				<div class="col-lg-4 features_col">
					<div class="features_item d-flex flex-column align-items-center justify-content-center text-center">
						<!-- <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
						<div class="icon_container d-flex flex-column justify-content-end">
							<img src="images/icon_2.svg" alt="">
						</div>
						<h3>Facil de usar</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis ultrices.</p>
					</div>
				</div>
				
				<!-- Features Item -->
				<div class="col-lg-4 features_col">
					<div class="features_item d-flex flex-column align-items-center justify-content-center text-center">
						<!-- <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
						<div class="icon_container d-flex flex-column justify-content-end">
							<img src="images/icon_3.svg" alt="">
						</div>
						<h3>Bien documentada</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis ultrices.</p>
					</div>
				</div>

			</div>
		</div>
	</div>



	<!-- Contact -->

	<div class="contact prlx_parent">
		<div class="contact_background prlx" style="background-image: url(images/contact_background.jpg);"></div>
		<div class="contact_shapes"><img src="images/contact_shape.png" alt=""></div>
		<div class="container">
			
			<div class="row">
				<div class="col-lg-6 offset-lg-3 text-center section_title contact_title">
					<h2>let's work together<span>z</span></h2>
				</div>
			</div>
			
			<div class="row">
				<div class="col-lg-10 offset-lg-1 text-center contact_text">
					<p>Dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget quam.</p>
					<div class="button contact_button">
						<a href="contact.html" class="d-flex flex-row align-items-center justify-content-center">contact<img src="images/arrow_right.svg" alt=""></a>
					</div>
				</div>
			</div>
		</div>
	</div>

@endsection
