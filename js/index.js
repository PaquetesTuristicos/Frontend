const params = new URLSearchParams(window.location.search);
const contenedor = window.document.getElementById("contenedorPaquetes");
const id = params.get("destinoId");

let URL= "https://localhost:44341/api/Paquetes";

if(params.has("destinoId")) {
  contenedor
  .innerHTML = `<h3>Viendo paquetes del destino id:${id}</h3>`;
  URL += "/porDestino?destinoId=" + id;
};


let prom = fetch(URL);
console.log(URL);
console.log(prom);
prom.then(res => {
  if(res.ok) {
    console.log(res);
    const json = res.json();
    return json;
  }
  else {
    console.log("no hay paquetes");
    contenedor.innerHTML = `<h3>No hay Paquetes para el destino id:${id}</h3>`;
  };
}).then(json => {
    console.log(json);
    for(let i=0; i < json.length; i++) {
        console.log(json[i].lugar);
    }
    renderizarPaquetes(json);
});

function renderizarPaquetes(paquetes){
    let contenedor = document.getElementById("contenedorPaquetes");
    for(let i=0; i < paquetes.length; i++) {
        paquete = paquetes[i];
        contenedor.innerHTML +=
        `<div class="card mt-4 paquete" style="width: 18rem;">
        <img src="https://loisuites.com.ar/sites/default/files/Loisuites_2020_promociones_miniescapada_chapelco_web_1.png" class="card-img-top" alt="Img paquete...">
        <div class="card-body">
          <h5 class="card-title">${paquete.nombre}</h5>
          <p class="card-text">${paquete.descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Salida el ${paquete.fechaSalida}</li>
          <li class="list-group-item">${paquete.totalNoches} noches</li>
          <li class="list-group-item">$${paquete.precio}</li>
          <li class="list-group-item" style="color: brown">Descuento ${paquete.descuento}%</li>
        </ul>
        <div class="card-body">
          <a class="card-link" href="paquete.html?paqueteId=${paquete.id}">Mas información</a>
          <a class="card-link" href="reserva.html?paqueteId=${paquete.id}">Reservar YA</a>
        </div>
      </div>`
    };
};


//Redessociales
document.getElementById('contacto').onclick = RedesSociales;
function RedesSociales(event){
    $('html,body').animate(
        {
            scrollTop: $('#social').offset().top
        }
    );
}
function login(){
  window.location.href = "http://localhost/paquetes/Frontend/admin/login.html";
}