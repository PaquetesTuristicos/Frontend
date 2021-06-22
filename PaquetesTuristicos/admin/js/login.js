var login = document.getElementById('loginForm');
console.log(login);


login.addEventListener('submit', function (e) {
    e.preventDefault();
    var datos = new FormData(login);
    console.log(e.target)
    let jsonDataConvert = JSON.stringify(
        {
            nombre: datos.get('email'),
            preparacion: datos.get('password'),

        }               
    );
    console.log(jsonDataConvert)

    fetch(`https://localhost:44384/api/User/authenticate`, {
        method: 'POST',
        body: jsonDataConvert,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.clientToken
        },
    })
        .then(res => res.json())
        .then(datos => {
            console.log(res)
            console.log(datos)
        })
})