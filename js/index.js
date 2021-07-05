let URL = "https://localhost:44341/api/Destino"
let prom = fetch(URL);
console.log(prom);
prom.then(res => {
    console.log(res);
    const json = res.json();
    console.log(json);
    console.log(res);
    return json;
}).then(json => {
    console.log(json);
    for(let i=0; i < json.length; i++) {
        console.log(json[i].lugar);
    }
    renderizarDestinos(json);
});

function renderizarDestinos(destinos){
    let contenedor = document.getElementById("contenedorIndex");
    for(let i=0; i < destinos.length; i++) {
        destino = destinos[i];
        contenedor.innerHTML +=
        `<div class="card mt-4 paquete" style="width: 18rem;">
        <img src="${destino.descripcion}" class="card-img-top" alt="Img destino...">
        <div class="card-body">
          <h5 class="card-title">${destino.lugar}</h5>
          <p class="card-text">${destino.atractivo}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Info</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
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
