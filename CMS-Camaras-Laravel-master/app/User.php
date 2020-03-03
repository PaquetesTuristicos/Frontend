<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 'apellidos', 'sexo', 'fecha_nacimiento', 'localidad', 'municipio', 'direccion', 'cp', 'email', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setPasswordAttribute($data)
    {
        if( ! empty( $data ) )
        {
            return $this->attributes['password'] = bcrypt( $data );
        }
    }

    public function getFullNameAttribute ()
    {
        return 'id: ' . $this->id . ' ' . $this->nombre.' '.$this->apellidos;  
    }

    public function compras()
    {
        return $this->belongsToMany('App\Compra');
    }
}
