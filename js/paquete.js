const params = new URLSearchParams(window.location.search);

const titulo = window.document.getElementById("paqueteTitulo");

if(!params.has("paqueteId")) {
  alert("Error: No hay una identificación del paquete");
  window.history.go(-1);
};

let URL = "https://localhost:44341/api/Paquetes/";
URL += params.get("paqueteId");
let prom = fetch(URL);
console.log(prom);
prom.then(res => {
    if(res.ok) {
      console.log(res);
      const json = res.json();
      console.log(json);
      console.log(res);
      return json;
    }
    else {
      titulo.innerHTML = "<h5>Error: No se encontró el paquete</h5>";
    };
    
}).then(json => {
    console.log(json);
    for(let i=0; i < json.length; i++) {
        console.log(json[i].lugar);
    }
    nombrePaquete = json.nombre
    renderizarPaquete(json);
});

function renderizarPaquete(paquete){
  console.log(paquete)
  document.getElementById("contenido").innerHTML = `    
  <div class="container">
  <h3 id="paqueteTitulo">${paquete.nombre}</h3>
</div>
<div class="row g-0 bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img id="imagen1" src="https://loisuites.com.ar/sites/default/files/Loisuites_2020_promociones_miniescapada_chapelco_web_1.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">${paquete.nombre}</h5>
    <p id="descripcion">${paquete.descripcion}</p>
    <h5>Salida y vuelta</h5>
    <p class="card-text"><small class="text-muted">${paquete.fechaSalida} - ${paquete.fechaVuelta}</small></p>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${paquete.totalNoches} noches</li>
    <li class="list-group-item">$${paquete.precio}</li>
    <li class="list-group-item" style="color: brown">Descuento ${paquete.descuento}%</li>
  </ul>
  <br>
    <div>
    <a href="javascript: reservar()" class="stretched-link boton-personalizado-2">Reservar YA</a>
    </div>

   
  </div>
</div>`
pintarHotelesPorPaquete(paquete)
};

function pintarHotelesPorPaquete(paquete){
var hoteles =  document.getElementById("hoteles")
for(let valor of paquete.listaDestinosDetalles){
  hoteles.innerHTML += `
  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${valor.destino.imagen}" alt="..." width="350" height="250">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div class="container">
      <h3 class="card-title"><i class="fa fa-plane" aria-hidden="true"></i> ${valor.destino.lugar}</h3>
      <p class="card-text">${valor.destino.descripcion}</p>
      <p class="card-text"><small class="text-muted">${valor.destino.historia}</small></p>
      </div>
        <h5 class="card-title"><i class="fa fa-bed" aria-hidden="true"></i> ${valor.hotel.marca}</h5>
        <p class="clasificacion">
        <label for="radio1">★</label>     
        <label for="radio2">★</label>
        <label for="radio3">★</label> 
        <label for="radio4">★</label>
        <label for="radio5">★</label>
      </p>
      <p class="card-text"><small class="text-muted">Noches ${valor.noches}</small></p>
        <p class="card-text">Hermmoso hotel ubicado en zona centrica de la ciudad con una increible vista. Cuenta con gimnacio, pisina. media pension y servicio de caja fuerte.</p>
        <p class="card-text"><small class="text-muted">Ultima actualizacion hace 3 minutos</small></p>
      </div>

      
    </div>
  </div>
</div>`
}

}

function reservar() {
  //le falta esta lines a juan:
  window.location.href = "reserva.html?paqueteId="+params.get("paqueteId")+"&nombrePaquete="+nombrePaquete;
}

//Redessociales
document.getElementById('contacto').onclick = RedesSociales;
function RedesSociales(event){
    $('html,body').animate(
        {
            scrollTop: $('#social').offset().top
        }
    );
}

