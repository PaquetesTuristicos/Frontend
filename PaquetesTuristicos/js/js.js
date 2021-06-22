//Redessociales
document.getElementById('contacto').onclick = RedesSociales;
function RedesSociales(event){
    $('html,body').animate(
        {
            scrollTop: $('#social').offset().top
        }
    );
}
//Paquete
document.getElementById('socialClick').onclick = RedesSociales;
function RedesSociales(event){
    $('html,body').animate(
        {
            scrollTop: $('#social').offset().top
        }
    );
}