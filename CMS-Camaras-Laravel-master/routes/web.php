<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/create', function(){
//     App\Admin::create([
//         'nombre' => 'SomeName',
//         'email' => 'SomeName@gmail.com',
//         // 'login' => 'somelogin',
//         'password' => bcrypt('SomePassword'),
//     ]);
//  });

 
Auth::routes();

Route::get( '/', 'HomeController@index' )
	->name('home');

Route::get( '/home', 'HomeController@index' )
	->name('home');


Route::get( 'productos', 'Home\ShowProductos' )
	->name('productos');

Route::get( 'productos/{id}', 'Home\ShowProducto' )
	->name('productos.show');

/* Cliente  */
Route::group(['prefix' => 'cliente'], function()
{
	Route::get( 'login', 'HomeController@login' )
		->name('login')
		->middleware('guest');

	Route::post('login', 'Auth\LoginController@login')
		->name('login.submit');

	Route::get('register', 'HomeController@register')
		->name('register')
		->middleware('guest');

	Route::post('register', 'Auth\RegisterController@register')
		->name('register.submit');

	Route::get('home', 'Cliente\DashboardController@home')
		->name('cliente.home');

	Route::get('dashboard', 'Cliente\DashboardController@home')
		->name('cliente.home');

	Route::get('compras', 'Cliente\CompraController@index')
		->name('cliente.compras');

	Route::get('compras/{id}', 'Cliente\CompraController@show')
		->name('cliente.compras.show');
});

/*  Admin  */
Route::group(['prefix' => 'admin'], function()
{
	Route::get('login', 
		'AuthAdmin\LoginController@showLoginForm')
		->name('admin.login');

	Route::post('login', 
		'AuthAdmin\LoginController@login')
		->name('admin.login.submit');
		
	Route::get('logout', 
		'AuthAdmin\LoginController@logout')
		->name('admin.logout');

	Route::get('home', 'Admin\DashboardController@home')
		->name('admin.home');

	Route::get('dashboard', 'Admin\DashboardController@home')
		->name('admin.home');

	Route::group( [ 'prefix' => 'proveedores' ], function()
	{
		Route::get( '', 'Admin\ProveedorController@index' )
			->name('admin.proveedores');

		Route::get( 'crear', 'Admin\ProveedorController@create' )
			->name('admin.proveedores.create');

		Route::post( 'almacenar', 'Admin\ProveedorController@store' )
			->name('admin.proveedores.store');

		Route::get( '{id}/editar', 'Admin\ProveedorController@edit' )
			->name('admin.proveedores.edit');

		Route::post( '{id}/actualizar', 'Admin\ProveedorController@update' )
			->name('admin.proveedores.update');

		Route::post( '{id}/destruir', 'Admin\ProveedorController@destroy' )
			->name('admin.proveedores.destroy');
	} );

	Route::group( [ 'prefix' => 'categorias' ], function()
	{
		Route::get( '', 'Admin\CategoriaController@index' )
			->name('admin.categorias');

		Route::get( 'crear', 'Admin\CategoriaController@create' )
			->name('admin.categorias.create');

		Route::post( 'almacenar', 'Admin\CategoriaController@store' )
			->name('admin.categorias.store');

		Route::get( '{id}/editar', 'Admin\CategoriaController@edit' )
			->name('admin.categorias.edit');

		Route::post( '{id}/actualizar', 'Admin\CategoriaController@update' )
			->name('admin.categorias.update');

		Route::post( '{id}/destruir', 'Admin\CategoriaController@destroy' )
			->name('admin.categorias.destroy');
	} );

	Route::group( [ 'prefix' => 'productos' ], function()
	{
		Route::get( '', 'Admin\ProductoController@index' )
			->name('admin.productos');

		Route::get( 'crear', 'Admin\ProductoController@create' )
			->name('admin.productos.create');

		Route::post( 'almacenar', 'Admin\ProductoController@store' )
			->name('admin.productos.store');

		Route::get( '{id}/editar', 'Admin\ProductoController@edit' )
			->name('admin.productos.edit');

		Route::post( '{id}/actualizar', 'Admin\ProductoController@update' )
			->name('admin.productos.update');

		Route::post( '{id}/destruir', 'Admin\ProductoController@destroy' )
			->name('admin.productos.destroy');
	} );

	Route::group( [ 'prefix' => 'clientes' ], function()
	{
		Route::get( '', 'Admin\ClienteController@index' )
			->name('admin.clientes');

		Route::get( 'crear', 'Admin\ClienteController@create' )
			->name('admin.clientes.create');

		Route::post( 'almacenar', 'Admin\ClienteController@store' )
			->name('admin.clientes.store');

		Route::get( '{id}/editar', 'Admin\ClienteController@edit' )
			->name('admin.clientes.edit');

		Route::post( '{id}/actualizar', 'Admin\ClienteController@update' )
			->name('admin.clientes.update');

		Route::post( '{id}/destruir', 'Admin\ClienteController@destroy' )
			->name('admin.clientes.destroy');
	} );

	Route::group( [ 'prefix' => 'compras' ], function()
	{
		Route::get( '', 'Admin\CompraController@index' )
			->name('admin.compras');

		Route::get( 'crear', 'Admin\CompraController@create' )
			->name('admin.compras.create');

		Route::post( 'almacenar', 'Admin\CompraController@store' )
			->name('admin.compras.store');

		Route::get( '{id}/editar', 'Admin\CompraController@edit' )
			->name('admin.compras.edit');

		Route::post( '{id}/actualizar', 'Admin\CompraController@update' )
			->name('admin.compras.update');

		Route::post( '{id}/destruir', 'Admin\CompraController@destroy' )
			->name('admin.compras.destroy');

		Route::get( '{id}', 'Admin\CompraController@show' )
			->name('admin.compras.show');
	} );


	Route::group( [ 'prefix' => 'sucursales' ], function()
	{
		Route::get( '', 'Admin\SucursalController@index' )
			->name('admin.sucursales');

		Route::get( 'crear', 'Admin\SucursalController@create' )
			->name('admin.sucursales.create');

		Route::post( 'almacenar', 'Admin\SucursalController@store' )
			->name('admin.sucursales.store');

		Route::get( '{id}/editar', 'Admin\SucursalController@edit' )
			->name('admin.sucursales.edit');

		Route::post( '{id}/actualizar', 'Admin\SucursalController@update' )
			->name('admin.sucursales.update');

		Route::post( '{id}/destruir', 'Admin\SucursalController@destroy' )
			->name('admin.sucursales.destroy');
	} );
});