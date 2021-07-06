// Usuario 



// var bottomUsuario = document.getElementById('bottomUsuario');
var msusuario = `https://localhost:44384/api/user/`
var msempleado = `https://localhost:44384/api/empleado/`
var mspasajero = `https://localhost:44384/api/pasajero/`

var usuario = document.querySelector('#contenido')
var empleado = document.querySelector('#contenidoEmpleado')
var pasajero = document.querySelector('#contenidoPasajero')
pintar()
function pintar(){
    fetch(msusuario, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            usuarios(datos)
        })
}
// carga datos en pantalla 
function usuarios(data) {
    usuario.innerHTML = ''
    usuario.innerHTML = `

<div class="row justify-content-center align-items-center">
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Email</th>
        <th scope="col">Roll</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodyUsuario">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyUsuario')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.userId}</th>
        <td>${valor.nombre}</td>
        <td>${valor.apellido}</td>
        <td>${valor.email}</td>
        <td>${valor.roll.nombre}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarUsuarioModal" onclick="editUsuario(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteUsuario(${valor.userId})">Borrar</button>
        </td>
      </tr>`
    }
}
//crear Usuario 
function createUsuario(){  
    var formularioUsuarioCargar = document.getElementById('cargarUsuarioForm');
    var usuarioRespuestaCargar = document.getElementById('cargarUsuarioRespuesta');
    var datos = new FormData(formularioUsuarioCargar);
    let jsonDataConvert = JSON.stringify(
        {
            nombre: datos.get('nombre'),
            apellido: datos.get('apellido'),
            email: datos.get('email'),
            password: datos.get('password'),
            roll: new Number(document.getElementById("roll").value)
        }               
    );
    console.log(jsonDataConvert)

    fetch(msusuario, {
        method: 'POST',
        body: jsonDataConvert,
        headers: myHeaders,
        
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            alert("usuario creado")
            location.reload()
        })
}
// editar usuario 
function editUsuario(id){
    var formularioUsuarioEdit = document.getElementById('editUsuarioForm');
    var usuarioRespuestaEdit = document.getElementById('editUsuarioRespuesta');

    fetch(msusuario+`${id}`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            formularioUsuarioEdit.querySelector('.id').value = id
            formularioUsuarioEdit.querySelector('.nombre').value = data.nombre
            formularioUsuarioEdit.querySelector('.apellido').value = data.apellido
            formularioUsuarioEdit.querySelector('.email').value = data.email
            formularioUsuarioEdit.querySelector('.password').value = data.password

        })
        var bottomEdit = document.getElementById('editarUsuario')
        bottomEdit.addEventListener('click', function(e){
            e.preventDefault();
            ejecutarEdit(id)
        });
        function ejecutarEdit(id){
            var formularioUsuarioEdit = document.getElementById('editUsuarioForm');
            var datos = new FormData(formularioUsuarioEdit);
            let jsonDataConvertEdit = JSON.stringify(
                {
                    nombre: datos.get('nombre'),
                    apellido: datos.get('apellido'),
                    email: datos.get('email'),
                    password: datos.get('password'),
                    roll: new Number(document.getElementById("editroll").value)
                }               
            );
            fetch(msusuario+`${id}`, {
                method: 'PUT',
                body: jsonDataConvertEdit,
                headers: myHeaders,
                
            })
                .then(res => res.json())
                .then(datos => {
                    console.log(datos)
                    alert("usuario editado")
                    location.reload()
                })
            }
  };

// eliminar usuario 
function deliteUsuario(id){
  fetch(msusuario+`${id}`, {
    method: 'DELETE',
    headers: myHeaders,
})
    .then(res => res.json())
    .then(datos => {
        console.log(datos)
        alert("usuario eliminado")
        location.reload()
    })
};
// empleado 
function empleados() {
    console.log('empleado')
    fetch(msempleado, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            tablaEmpleado(datos)
        })
}
function tablaEmpleado(datos){

    empleado.innerHTML = `
    <div class="row">
    <h3>Empleado</h3>
      </div>
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">DNI</th>
        <th scope="col">Telefono</th>
        <th scope="col">Cumpleaños</th>
        <th scope="col">Legajo</th>
        <th scope="col">Sueldo</th>
        <th scope="col">Email</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodyEmpleado">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyEmpleado')
    for (let valor of datos) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.empleadoId}</th>
        <td>${valor.dni}</td>
        <td>${valor.telefono}</td>
        <td>${valor.fechaNacimiento}</td>
        <td>${valor.legajo}</td>
        <td>${valor.sueldo}</td>
        <td>${valor.user.email}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarUsuarioModal" onclick="editEmpleado(${valor.empleadoId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteEmpleado(${valor.empleadoId})">Borrar</button>
        </td>
      </tr>
    `
    }
}
// Pasajero 
function pasajeros() {
    console.log('empleado')
    fetch(mspasajero, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            tablaPasajero(datos)
        })
}
function tablaPasajero(datos){

    pasajero.innerHTML = `
    <div class="row">
    <h3>Pasajero</h3>
      </div>
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">DNI</th>
        <th scope="col">Telefono</th>
        <th scope="col">Cumpleaños</th>
        <th scope="col">Email</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodyPasajero">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyPasajero')
    for (let valor of datos) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.pasajeroId}</th>
        <td>${valor.dni}</td>
        <td>${valor.telefono}</td>
        <td>${valor.fechaNacimiento}</td>
        <td>${valor.user.email}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarUsuarioModal" onclick="editEmpleado(${valor.pasajeroId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteEmpleado(${valor.pasajeroId})">Borrar</button>
        </td>
      </tr>
    `
    }
}