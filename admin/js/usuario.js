// Usuario 
console.log(localStorage.getItem('token'))


// var bottomUsuario = document.getElementById('bottomUsuario');
var msusuario = `https://localhost:44384/api/user/`

var usuario = document.querySelector('#contenido')
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
    usuario.innerHTML = `<div>
    <div>
        <H3>Usuarios</H3>
    </div>
</div>
<div>
<div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cargarUsuarioModal">
Nuevo Usuario
</button>   
<!-- Modal -->
<div class="modal fade" id="cargarUsuarioModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="cargarUsuarioForm">                   
                    <input type="text" name="nombre" placeholder="Ingresa Nombre" class="form-control my-3" required />
                    <input type="text" name="apellido" placeholder="Ingresa Apellido" class="form-control my-3" required />
                    <input type="text" name="email" placeholder="Ingresa Email" class="form-control my-3" required />
                    <input type="password" name="password" placeholder="Ingresa Password" class="form-control my-3" required />
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Tipo</label>
                        <select id="roll" class="form-select selectRoll" required>
                            <option selected value="">Seleccione Roll...</option>
                            <option type="text" value="1" id="1">Administrador</option>
                            <option type="text" value="2" id="2">Empleado</option>
                            <option type="text" value="3" id="3">Cliente</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="createUsuario()">Crear</button>
                    </div>
                </form>
                <div class="mt-3" id="cargarUsuarioRespuesta">

                </div>
            </div>

        </div>
    </div>
</div>
<!-- Modal editar -->
<div class="modal fade" id="editarUsuarioModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="editUsuarioForm">
                <input type="number" name="id" placeholder="" class="form-control my-3 id" required />
                    <input type="text" name="nombre" placeholder="Ingresa Nombre" class="form-control my-3 nombre" required />
                    <input type="text" name="apellido" placeholder="Ingresa Apellido" class="form-control my-3 apellido" required />
                    <input type="text" name="email" placeholder="Ingresa Email" class="form-control my-3 email" required />
                    <input type="password" name="password" placeholder="Ingresa Password" class="form-control my-3 password" required />
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Tipo</label>
                        <select id="editroll" class="form-select selectRoll" required>
                            <option selected value="">Seleccione Roll...</option>
                            <option type="text" value="1" id="1">Administrador</option>
                            <option type="text" value="2" id="2">Empleado</option>
                            <option type="text" value="3" id="3">Cliente</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button id="editarUsuario" type="button" class="btn btn-primary">Editar</button>
                    </div>
                </form>
                <div class="mt-3" id="editarUsuarioRespuesta">

                </div>
            </div>

        </div>
    </div>
</div>
        <button type="button" class="btn btn-primary">Buscar Usuario</button>
      
        <div class="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Configuracion
          </button>
          <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a class="dropdown-item" href="#">nose</a></li>
            <li><a class="dropdown-item" href="#">definir</a></li>
          </ul>
        </div>
      
</div>
</div>
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