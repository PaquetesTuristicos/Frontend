const params = new URLSearchParams(window.location.search);
const paqueteId = params.get("paqueteId");
const nombrePaquete = params.get("nombrePaquete");


window.document.querySelector("#reservaPaquete")
.innerHTML = "Reservando <i>" + nombrePaquete + "</i>";




//Redessociales
document.getElementById('contacto').onclick = RedesSociales;
function RedesSociales(event){
    $('html,body').animate(
        {
            scrollTop: $('#social').offset().top
        }
    );
}
