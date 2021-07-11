// Viaje 
// var bottomViaje = document.getElementById('bottomViaje');
var msViaje = `https://localhost:44385/api/viajes/`
var mstipoViaje = `https://localhost:44385/api/tipoviajes/`
var msterminal = `https://localhost:44385/api/terminal/`
var mscoordinadores = `https://localhost:44385/api/coordinadores/`

var Viaje = document.querySelector('#contenido')
pintarViajes()
function pintarViajes(){
    fetch(msViaje, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            viajes(datos)
        })
}

function pintarTerminales(){
    fetch(msterminal, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            terminales(datos)
        })
}

function pintarCoordinadores(){
    fetch(mscoordinadores, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            coordinadores(datos)
        })
}
// carga datos en pantalla 
function viajes(data) {
    Viaje.innerHTML = ''
    Viaje.innerHTML = `
    <div class="row">
    <h3>Viajes</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Salida</th>
        <th scope="col">Hola</th>
        <th scope="col">Tipo</th>
        <th scope="col">Origen</th>
        <th scope="col">Destino</th>
        <th scope="col">Paquete</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody id="tbodyViaje">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyViaje')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.viajeId}</th>
        <td>${valor.fechaSalida}</td>
        <td>${valor.horaSalida}</td>
        <td>${valor.tipoViaje}</td>
        <td>${valor.terminalOrigen}</td>
        <td>${valor.terminalDestino}</td>
        <td>${valor.paqueteId}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.viajeId})">Borrar</button>
        </td>
      </tr>`
    }
}

// carga datos en pantalla Terminal
function terminales(data) {
    Viaje.innerHTML = ''
    Viaje.innerHTML = `
    <div class="row">
    <h3>Terminales</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nombre</th>
        <th scope="col">descripcion</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody id="tbodyViaje">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyViaje')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.terminalId}</th>
        <td>${valor.nombre}</td>
        <td>${valor.descripcion}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.terminalId})">Borrar</button>
        </td>
      </tr>`
    }
}

// carga datos en pantalla Coordinadores
function coordinadores(data) {
    Viaje.innerHTML = ''
    Viaje.innerHTML = `
    <div class="row">
    <h3>Coordinadores</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nombre</th>
        <th scope="col">apellido</th>
        <th scope="col">contacto</th>
        <th scope="col">email</th>
        <th scope="col">agenda</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody id="tbodyViaje">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodyViaje')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.coordinadorId}</th>
        <td>${valor.nombre}</td>
        <td>${valor.apellido}</td>
        <td>${valor.contacto}</td>
        <td>${valor.email}</td>
        <td>${valor.agenda}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.coordinadorId})">Borrar</button>
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
            fechaHoraSalida: datos.get('fechaHoraSalida'),
            tipoViajeId: new Number(datos.get('tipoViajeId')),
            terminalOrigenId: new Number(datos.get('terminalOrigenId')),
            terminalDestinoId: new Number(datos.get('terminalDestinoId')),
            paqueteId: new Number(datos.get('paqueteId'))
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
