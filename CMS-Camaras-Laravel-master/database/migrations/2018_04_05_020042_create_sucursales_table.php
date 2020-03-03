<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSucursalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);

        Schema::create('sucursales', function (Blueprint $table) {
            $table->increments('id');

            $table->string('nombre');
            $table->longText('descripcion')->nullable();
            $table->string('moneda', 5)->default('MXN');
            $table->string('localidad')->nullable();
            $table->string('direccion')->nullable();
            $table->integer('cp')->nullable();
            $table->string('telefono')->nullable();

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
        Schema::dropIfExists('sucursales');
    }
}
