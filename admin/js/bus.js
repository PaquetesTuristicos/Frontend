// Bus 
var msBus = `https://localhost:44385/api/bus/`
var msEmpresa = `https://localhost:44385/api/empresa/`
var msChofer = `https://localhost:44385/api/chofer/`

var bus = document.querySelector('#contenido')
pintarBus()
function pintarBus(){
    fetch(msBus, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            Bus(datos)
        })
}
function pintarEmpresa(){
    fetch(msEmpresa, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            empresa(datos)
        })
}

function pintarChofer(){
    fetch(msChofer, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            chofer(datos)
        })
}

// carga datos en pantalla 
function Bus(data) {
    bus.innerHTML = ''
    bus.innerHTML = `
    <div class="row">
    <h3>Bus</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Numero</th>
        <th scope="col">Patente</th>
        <th scope="col">Capacidad</th>
        <th scope="col">Empresa</th>
        <th scope="col">Telefono</th>
        <th scope="col">Email</th>
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
        <th scope="row">${valor.busId}</th>
        <td>${valor.numero}</td>
        <td>${valor.patente}</td>
        <td>${valor.capacidad}</td>
        <td>${valor.empresa}</td>
        <td>${valor.empresaContacto}</td>
        <td>${valor.empresaEmail}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.viajeId})">Borrar</button>
        </td>
      </tr>`
    }
}
function empresa(data) {
    bus.innerHTML = ''
    bus.innerHTML = `
    <div class="row">
    <h3>Empresas</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nombre</th>
        <th scope="col">email</th>
        <th scope="col">contacto</th>
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
        <th scope="row">${valor.empresaId}</th>
        <td>${valor.nombre}</td>
        <td>${valor.email}</td>
        <td>${valor.contacto}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.viajeId})">Borrar</button>
        </td>
      </tr>`
    }
}

function chofer(data) {
    bus.innerHTML = ''
    bus.innerHTML = `
    <div class="row">
    <h3>Chofer</h3>
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
        <th scope="col">licencia</th>
        <th scope="col">vencimiento</th>
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
        <th scope="row">${valor.choferId}</th>
        <td>${valor.nombre}</td>
        <td>${valor.apellido}</td>
        <td>${valor.contacto}</td>
        <td>${valor.email}</td>
        <td>${valor.licencia}</td>
        <td>${valor.vencimiento}</td>
        <td>${valor.agenda}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarViajeModal" onclick="editViaje(${valor.userId})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="deliteViaje(${valor.viajeId})">Borrar</button>
        </td>
      </tr>`
    }
}



