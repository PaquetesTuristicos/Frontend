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
    renderizarPaquete(json);
});

function renderizarPaquete(paquete){
  titulo.innerHTML = paquete.nombre;
  //document.getElementById("imagen1").getAttribute("src") = paquete.imagen;
  //document.getElementById("imagen2").getAttribute("src") = paquete.imagen;
  document.getElementById("descripcion").innerHTML = paquete.descripcion;


};

function reservar() {
  window.location.href = "reserva.html?paqueteId="+params.get("paqueteId");
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