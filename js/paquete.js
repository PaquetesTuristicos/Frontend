const params = new URLSearchParams(window.location.search);

if(!params.has("paqueteId")) {
  alert("Error: No hay una identificación del paquete");
  window.history.go(-1);
};

const titulo = window.document.getElementById("paqueteTitulo");
var paquete;


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
    paquete = json;
    renderizarPaquete();
});

function renderizarPaquete(){
  titulo.innerHTML = paquete.nombre;
  //document.getElementById("imagen1").getAttribute("src") = paquete.imagen;
  //document.getElementById("imagen2").getAttribute("src") = paquete.imagen;
  const descripcion = document.getElementById("descripcion");
  descripcion.innerHTML = "Salida el " + paquete.fechaSalida;
  descripcion.innerHTML += "<br>Vuelta el " + paquete.fechaVuelta;
  descripcion.innerHTML += "<br>Total " + paquete.totalNoches + " noches";
  descripcion.innerHTML += "<br>" + paquete.descripcion;

};

function reservar() {
  window.location.href = "reserva.html?paqueteId=" + 
  paquete.id + "&nombrePaquete=" + paquete.nombre;
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