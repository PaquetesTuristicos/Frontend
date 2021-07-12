// paquete 
// var bottompaquete = document.getElementById('bottompaquete');
var mspaquete = `https://localhost:44341/api/paquetes/`
var mstipopaquete = `https://localhost:44341/api/tipopaquetes/`
var msterminal = `https://localhost:44341/api/terminal/`
var mshoteles = `https://localhost:44341/api/hoteles/`
var msexcursion = `https://localhost:44341/api/Excursion/`
var msdestinos = `https://localhost:44341/api/destino/`

var paquete = document.querySelector('#contenido')
pintarPaquetes()
function pintarPaquetes(){
    fetch(mspaquete, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            paquetes(datos)
        })
}

function pintarHoteles(){
    fetch(mshoteles, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            hoteles(datos)
        })
}

function pintarExcursiones(){
    fetch(msexcursion, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            excursiones(datos)
        })
}

function pintarDestinos(){
    fetch(msdestinos, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(datos => {
            destinos(datos)
        })
}
// carga datos en pantalla 
function paquetes(data) {
    paquete.innerHTML = ''
    paquete.innerHTML = `
    <div class="row">
    <h3>Paquetes</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table  id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nombre</th>
        <th scope="col">descripcion</th>
        <th scope="col">fechasalida</th>
        <th scope="col">fechavuelta</th>
        <th scope="col">totalnoches</th>
        <th scope="col">precio</th>
        <th scope="col">descuento</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodypaquete">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodypaquete')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.nombre}</td>
        <td>${valor.descripcion}</td>
        <td>${valor.fechasalida}</td>
        <td>${valor.fechavuelta}</td>
        <td>${valor.totalnoches}</td>
        <td>${valor.precio}</td>
        <td>${valor.descuento}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarpaqueteModal" onclick="editpaquete(${valor.id})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="delitepaquete(${valor.id})">Borrar</button>
        </td>
      </tr>`
    }
}
//crear paquete 
function createpaquete(){  
    var formulariopaqueteCargar = document.getElementById('cargarpaqueteForm');
    var paqueteRespuestaCargar = document.getElementById('cargarpaqueteRespuesta');
    var datos = new FormData(formulariopaqueteCargar);
    console.log(datos)
    let jsonDataConvert = JSON.stringify(
        {
            nombre: datos.get('nombre'),
            descripcion: datos.get('descripcion'),
            fechasalida: datos.get('fechasalida'),
            fechavuelta: datos.get('fechavuelta'),
            precio: new Number(datos.get('precio')),
            descuento: new Number(datos.get('descuento')),
        }               
    );
    console.log(jsonDataConvert)

    fetch(mspaquete, {
        method: 'POST',
        body: jsonDataConvert,
        headers: myHeaders,
        
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            alert("paquete creado")
            location.reload()
        })
}
// editar paquete 
function editpaquete(id){
    var formulariopaqueteEdit = document.getElementById('editpaqueteForm');
    var paqueteRespuestaEdit = document.getElementById('editpaqueteRespuesta');

    fetch(mspaquete+`${id}`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            formulariopaqueteEdit.querySelector('.id').value = id
            formulariopaqueteEdit.querySelector('.nombre').value = data.nombre
            formulariopaqueteEdit.querySelector('.apellido').value = data.apellido
            formulariopaqueteEdit.querySelector('.email').value = data.email
            formulariopaqueteEdit.querySelector('.password').value = data.password

        })
        var bottomEdit = document.getElementById('editarpaquete')
        bottomEdit.addEventListener('click', function(e){
            e.preventDefault();
            ejecutarEdit(id)
        });
        function ejecutarEdit(id){
            var formulariopaqueteEdit = document.getElementById('editpaqueteForm');
            var datos = new FormData(formulariopaqueteEdit);
            let jsonDataConvertEdit = JSON.stringify(
                {
                    nombre: datos.get('nombre'),
                    apellido: datos.get('apellido'),
                    email: datos.get('email'),
                    password: datos.get('password'),
                    roll: new Number(document.getElementById("editroll").value)
                }               
            );
            fetch(mspaquete+`${id}`, {
                method: 'PUT',
                body: jsonDataConvertEdit,
                headers: myHeaders,
                
            })
                .then(res => res.json())
                .then(datos => {
                    console.log(datos)
                    alert("paquete editado")
                    location.reload()
                })
            }
  };

// eliminar paquete 
function delitepaquete(id){
  fetch(mspaquete+`${id}`, {
    method: 'DELETE',
    headers: myHeaders,
})
    .then(res => res.json())
    .then(datos => {
        console.log(datos)
        alert("paquete eliminado")
        location.reload()
    })
};

function tipopaquete(id){
    fetch( mstipopaquete+`${id}?idTipopaquete=${id}`, {
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

function excursiones(data) {
    paquete.innerHTML = ''
    paquete.innerHTML = `
    <div class="row">
    <h3>Excursiones</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table  id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">titulo</th>
        <th scope="col">descripcion</th>
        <th scope="col">precio</th>
        <th scope="col">bloqueada</th>
        <th scope="col">destinoExcursiones</th>
        <th scope="col">reservaExcursiones</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodypaquete">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodypaquete')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.titulo}</td>
        <td>${valor.descripcion}</td>
        <td>${valor.precio}</td>
        <td>${valor.bloqueada}</td>
        <td>${valor.destinoExcursiones}</td>
        <td>${valor.reservaExcursiones}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarpaqueteModal" onclick="editpaquete(${valor.id})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="delitepaquete(${valor.id})">Borrar</button>
        </td>
      </tr>`
    }
}


function hoteles(data) {
    paquete.innerHTML = ''
    paquete.innerHTML = `
    <div class="row">
    <h3>Hoteles</h3>
      </div>
<div class="row justify-content-center align-items-center">
<table  id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">marca</th>
        <th scope="col">sucursal</th>
        <th scope="col">estrellas</th>
        <th scope="col">bloqueado</th>
        <th scope="col">idDireccion</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodypaquete">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodypaquete')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.marca}</td>
        <td>${valor.sucursal}</td>
        <td>${valor.estrellas}</td>
        <td>${valor.bloqueado}</td>
        <td>${valor.idDireccion}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarpaqueteModal" onclick="editpaquete(${valor.id})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="delitepaquete(${valor.id})">Borrar</button>
        </td>
      </tr>`
    }
}

function destinos(data) {
    paquete.innerHTML = ''
    paquete.innerHTML = `
    <div class="row">
    <h3>Destinos</h3>
      </div>

      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cargarDestinoModal">
      Nuevo Destinos
      </button>  
      <!-- Modal -->
      <div class="modal fade" id="cargarDestinoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Nuevo Paquete</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form id="cargardestinoForm">                   
                          <input type="text" name="lugar" placeholder="Ingresa lugar" class="form-control my-3" required />
                          <input type="text" name="descripcion" placeholder="Ingresa descripcion" class="form-control my-3" required />
                          <input type="text" name="atractivo" placeholder="Ingresa atractivo" class="form-control my-3" required />
                          <input type="text" name="historia" placeholder="Ingresa historia" class="form-control my-3" required />
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              <button type="button" class="btn btn-primary" onclick="createdestino()">Crear</button>
                          </div>
                      </form>
                      <div class="mt-3" id="cargarViajeRespuesta">
      
                      </div>
                  </div>
      
              </div>
          </div>
      </div>    

<div class="row justify-content-center align-items-center">
<table  id="regTable" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">lugar</th>
        <th scope="col">descripcion</th>
        <th scope="col">atractivo</th>
        <th scope="col">historia</th>
        <th scope="col">accion</th>
      </tr>
    </thead>
    <tbody id="tbodypaquete">
    </tbody>
    </table>
</div>`
var tabla = document.querySelector('#tbodypaquete')
    for (let valor of data) {
        tabla.innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.lugar}</td>
        <td>${valor.descripcion}</td>
        <td>${valor.atractivo}</td>
        <td>${valor.historia}</td>
        <td>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarpaqueteModal" onclick="editpaquete(${valor.id})">Editar</button>
            <button type="button" class="btn btn-outline-danger" onclick="delitedestino(${valor.id})">Borrar</button>
        </td>
      </tr>`
    }
}

//crear destino 
function createdestino(){  
    var formularioDestinoCargar = document.getElementById('cargardestinoForm');
    var paqueteRespuestaCargar = document.getElementById('cargarpaqueteRespuesta');
    let datos = new FormData(formularioDestinoCargar);
    let jsonDataConvert = JSON.stringify(
        {
            lugar: datos.get('lugar'),
            descripcion: datos.get('descripcion'),
            atractivo: datos.get('atractivo'),
            historia: datos.get('historia'),

        }               
    );
    console.log(jsonDataConvert)

    fetch(msdestinos, {
        method: 'POST',
        body: jsonDataConvert,
        headers: myHeaders,
        
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            alert("Destino creado")
            location.reload()
            
        })
}
// eliminar destino 
function delitedestino(id){
    fetch(msdestinos+`${id}`, {
      method: 'DELETE',
      headers: myHeaders,
  })
      .then(res => res.json())
      .then(datos => {
          console.log(datos)
          alert("Destino eliminado")
          location.reload()
      })
  };