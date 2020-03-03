<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompraProductoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compra_producto', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')
                ->references('id')
                ->on('productos');

            $table->integer('compra_id')->unsigned();
            $table->foreign('compra_id')
                ->references('id')
                ->on('compras');

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
        Schema::dropIfExists('compra_producto');
    }
}
