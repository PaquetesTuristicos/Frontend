// paquete 
// var bottompaquete = document.getElementById('bottompaquete');
var mspaquete = `https://localhost:44341/api/paquetes/`
var mstipopaquete = `https://localhost:44341/api/tipopaquetes/`
var msterminal = `https://localhost:44341/api/terminal/`

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
// carga datos en pantalla 
function paquetes(data) {
    paquete.innerHTML = ''
    paquete.innerHTML = `<div>
    <div>
        <H3>paquetes</H3>
    </div>
</div>
<div>
<div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cargarpaqueteModal">
Nuevo paquete
</button>   
<!-- Modal -->
<div class="modal fade" id="cargarpaqueteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo paquete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="cargarpaqueteForm">                   
                    <input type="text" name="nombre" placeholder="Ingresa nombre" class="form-control my-3" required />
                    <input type="text" name="descripcion" placeholder="Ingresa descripcion" class="form-control my-3" required />
                    <input type="text" name="fechasalida" placeholder="Ingresa fechasalida" class="form-control my-3" required />
                    <input type="text" name="fechavuelta" placeholder="Ingresa fechavuelta" class="form-control my-3" required />
                    <input type="text" name="totalnoches" placeholder="Ingresa totalnoches" class="form-control my-3" required />
                    <input type="number" name="precio" placeholder="Ingresa precio" class="form-control my-3" required />
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="createpaquete()">Crear</button>
                    </div>
                </form>
                <div class="mt-3" id="cargarpaqueteRespuesta">

                </div>
            </div>

        </div>
    </div>
</div>
<!-- Modal editar -->
<div class="modal fade" id="editarpaqueteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar paquete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="editpaqueteForm">
                <input type="number" name="id" placeholder="" class="form-control my-3 id" required />
                    <input type="text" name="nombre" placeholder="Ingresa Nombre" class="form-control my-3 nombre" required />
                    <input type="text" name="apellido" placeholder="Ingresa Apellido" class="form-control my-3 apellido" required />
                    <input type="text" name="email" placeholder="Ingresa Email" class="form-control my-3 email" required />
                    <input type="text" name="password" placeholder="Ingresa Password" class="form-control my-3 password" required />
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
                        <button id="editarpaquete" type="button" class="btn btn-primary">Editar</button>
                    </div>
                </form>
                <div class="mt-3" id="editarpaqueteRespuesta">

                </div>
            </div>

        </div>
    </div>
</div>
        <button type="button" class="btn btn-primary">Buscar paquete</button>
      
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
