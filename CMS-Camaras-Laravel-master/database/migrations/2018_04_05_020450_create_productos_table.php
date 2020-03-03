<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);

        Schema::create('productos', function (Blueprint $table) {
            $table->increments('id');

            $table->string('nombre');
            $table->longText('descripcion')->nullable();
            $table->float('precio');
            $table->float('descuento')->nullable();
            $table->string('modelo');
            $table->string('marca');
            $table->integer('existencia')->nullable();
            $table->string('imagen')->default('producto.png');

            $table->integer('proveedor_id')->unsigned();
            $table->foreign('proveedor_id')
                ->references('id')
                ->on('proveedores');

            $table->integer('categoria_id')->unsigned();
            $table->foreign('categoria_id')
                ->references('id')
                ->on('categorias');

            $table->integer('sucursal_id')->unsigned();
            $table->foreign('sucursal_id')
                ->references('id')
                ->on('sucursales');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
