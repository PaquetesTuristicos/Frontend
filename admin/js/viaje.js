// Viaje 
// var bottomViaje = document.getElementById('bottomViaje');
var msViaje = `https://localhost:44385/api/viajes/`
var mstipoViaje = `https://localhost:44385/api/tipoviajes/`
var msterminal = `https://localhost:44385/api/terminal/`

var Viaje = document.querySelector('#contenido')
pintar()
function pintar(){
    fetch(msViaje, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            Viajes(datos)
        })
}
// carga datos en pantalla 
function Viajes(data) {
    Viaje.innerHTML = ''
    Viaje.innerHTML = `<div>
    <div>
        <H3>Viajes</H3>
    </div>
</div>
<div>
<div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cargarViajeModal">
Nuevo Viaje
</button>   
<!-- Modal -->
<div class="modal fade" id="cargarViajeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Viaje</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="cargarViajeForm">                   
                    <input type="text" name="fechaIda" placeholder="Ingresa fechaIda" class="form-control my-3" required />
                    <input type="text" name="fechaVuelta" placeholder="Ingresa fechaVuelta" class="form-control my-3" required />
                    <input type="text" name="excursion" placeholder="Ingresa excursion" class="form-control my-3" required />
                    <input type="text" name="hora" placeholder="Ingresa hora" class="form-control my-3" required />
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
                        <button type="button" class="btn btn-primary" onclick="createViaje()">Crear</button>
                    </div>
                </form>
                <div class="mt-3" id="cargarViajeRespuesta">

                </div>
            </div>

        </div>
    </div>
</div>
<!-- Modal editar -->
<div class="modal fade" id="editarViajeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Viaje</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="editViajeForm">
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
                        <button id="editarViaje" type="button" class="btn btn-primary">Editar</button>
                    </div>
                </form>
                <div class="mt-3" id="editarViajeRespuesta">

                </div>
            </div>

        </div>
    </div>
</div>
        <button type="button" class="btn btn-primary">Buscar Viaje</button>
      
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
        <th scope="col">fechaHoraSalida</th>
        <th scope="col">terminalOrigenId</th>
        <th scope="col">tipoViajeId</th>
        <th scope="col">terminalDestinoId</th>
        <th scope="col">terminalDestinoId</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodyViaje">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyViaje')
    for (let valor of data) {
        console.log(valor)
        // let tipo = tipoViaje(valor.tipoId)
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.viajeId}</th>
        <td>${valor.fechaHoraSalida}</td>
        <td>${valor.tipoViajeId}</td>
        <td>${valor.terminalOrigenId}</td>
        <td>${valor.terminalDestinoId}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.viajeId})">Borrar</button>
        </td>
      </tr>`
    }
}
//crear Viaje 
function createViaje(){  
    var formularioViajeCargar = document.getElementById('cargarViajeForm');
    var ViajeRespuestaCargar = document.getElementById('cargarViajeRespuesta');
    var datos = new FormData(formularioViajeCargar);
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

    fetch(msViaje, {
        method: 'POST',
        body: jsonDataConvert,
        headers: myHeaders,
        
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            alert("Viaje creado")
            location.reload()
        })
}
// editar Viaje 
function editViaje(id){
    var formularioViajeEdit = document.getElementById('editViajeForm');
    var ViajeRespuestaEdit = document.getElementById('editViajeRespuesta');

    fetch(msViaje+`${id}`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            formularioViajeEdit.querySelector('.id').value = id
            formularioViajeEdit.querySelector('.nombre').value = data.nombre
            formularioViajeEdit.querySelector('.apellido').value = data.apellido
            formularioViajeEdit.querySelector('.email').value = data.email
            formularioViajeEdit.querySelector('.password').value = data.password

        })
        var bottomEdit = document.getElementById('editarViaje')
        bottomEdit.addEventListener('click', function(e){
            e.preventDefault();
            ejecutarEdit(id)
        });
        function ejecutarEdit(id){
            var formularioViajeEdit = document.getElementById('editViajeForm');
            var datos = new FormData(formularioViajeEdit);
            let jsonDataConvertEdit = JSON.stringify(
                {
                    nombre: datos.get('nombre'),
                    apellido: datos.get('apellido'),
                    email: datos.get('email'),
                    password: datos.get('password'),
                    roll: new Number(document.getElementById("editroll").value)
                }               
            );
            fetch(msViaje+`${id}`, {
                method: 'PUT',
                body: jsonDataConvertEdit,
                headers: myHeaders,
                
            })
                .then(res => res.json())
                .then(datos => {
                    console.log(datos)
                    alert("Viaje editado")
                    location.reload()
                })
            }
  };

// eliminar Viaje 
function deliteViaje(id){
  fetch(msViaje+`${id}`, {
    method: 'DELETE',
    headers: myHeaders,
})
    .then(res => res.json())
    .then(datos => {
        console.log(datos)
        alert("Viaje eliminado")
        location.reload()
    })
};

function tipoViaje(id){
    fetch( mstipoViaje+`${id}?idTipoViaje=${id}`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            
        })
}
function terminal(id){
    fetch( msterminal+`GetTerminalById/${id}`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            return datos
        })
}
