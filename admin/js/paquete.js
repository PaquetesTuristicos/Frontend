// paquete 
// var bottompaquete = document.getElementById('bottompaquete');
var mspaquete = `https://localhost:44341/api/paquetes/`
var mstipopaquete = `https://localhost:44341/api/tipopaquetes/`
var msterminal = `https://localhost:44341/api/terminal/`
var mshoteles = `https://localhost:44341/api/hoteles/`

var paquete = document.querySelector('#contenido')
pintar()
function pintar(){
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
    let jsonDataConvert = JSON.stringify(
        {
            nombre: datos.get('nombre'),
            descripcion: datos.get('descripcion'),
            fechasalida: datos.get('fechasalida'),
            fechavuelta: datos.get('fechavuelta'),
            totalnoches: new Number(datos.get('totalnoches')),
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


function hoteles(data) {
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