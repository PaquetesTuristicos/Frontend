<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('apellidos')->nullable();
            $table->boolean('sexo')->default(0);
            $table->date('fecha_nacimiento')->nullable();
            $table->string('localidad')->nullable();
            $table->string('municipio')->nullable();
            $table->string('direccion')->nullable();
            $table->integer('cp')->nullable();

            //$table->string('rol')->default('cliente');

            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
