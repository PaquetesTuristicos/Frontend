const params = new URLSearchParams(window.location.search);



window.document.querySelector("#reservaPaquete")
.innerHTML = "Reservando paquete id:" + params.get("paqueteId");




//Redessociales
document.getElementById('contacto').onclick = RedesSociales;
function RedesSociales(event){
    $('html,body').animate(
        {
            scrollTop: $('#social').offset().top
        }
    );
}
