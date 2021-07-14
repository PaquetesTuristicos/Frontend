const params = new URLSearchParams(window.location.search);
const paqueteId = params.get("paqueteId");
const nombrePaquete = params.get("nombrePaquete");

window.document.querySelector("#reservaPaquete")
.innerHTML = "Reservando <i>" + nombrePaquete + "</i>";

var datos;
let reservaForm = document.getElementById("reservaForm");
reservaForm.addEventListener("submit", function(e) {
    e.preventDefault();
    datos = new FormData(reservaForm);
    registrarUsuario();
});

function registrarUsuario() {
    let data1 = JSON.stringify(
        {
            nombre: datos.get("nombre"),
            apellido: datos.get("apellido"),
            email: datos.get("email"),
            password: datos.get("password"),
            roll: 3
        }
    );
    fetch("https://localhost:44384/api/User/register", {
        method: 'POST',
        body: data1,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        else {
            alert("No se pudo registrar tu usuario");
        };
    }) 
    .then(dat => {
        console.log("Registro de User exitoso:");
        console.log(dat);
        registrarPasajero(dat.id);
    });
};

function registrarPasajero(id) {
    let data2 = JSON.stringify(
        {
            userId: id,
            dni: parseInt(datos.get("dni")),
            telefono: parseInt(datos.get("telefono")),
            fechaNacimiento: datos.get("fechaNacimiento")
        }
    );
    console.log(data2);
    fetch(`https://localhost:44384/api/pasajero/`, {
        method: 'POST',
        body: data2,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        else {
            console.log("No se pudo registrarte como pasajero");
        };
    })
    .then(dat => {
        console.log("Registro de Pasajero exitoso:");
        console.log(dat);
        registrarReserva(dat.pasajeroId);
    });
};

function registrarReserva(id) {
    console.log("registrando resesva de pasajero: " + id);
    let data3 = JSON.stringify(
        {
            pasajeros: 1,
            pasajeroId: id,
            formaPagoId: 7,
            paqueteId: paqueteId,
            listaExcursiones: []
          }
    );
    console.log(data3);
    fetch("https://localhost:44341/api/Reserva", {
        method: 'POST',
        body: data3,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        else {
            console.log("No se pudo registrar tu reserva");
        };
    })
    .then(dat => {
        console.log(dat);
        alert(dat.message + "\n\nRecibirás un e-mail con los detalles");
        window.location.href = "index.html";
    });
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
