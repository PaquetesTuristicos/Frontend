
var bottomUsuario = document.getElementById('bottomUsuario');
var usuario = document.querySelector('#contenido')

bottomUsuario.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e.target)

    fetch(`https://localhost:44384/api/user`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + this.state.clientToken,
        },
    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            usuarios(datos)
        })
})
function usuarios(data) {
    usuario.innerHTML = ''
    for (let valor of data) {
        usuario.innerHTML += `test`
    }
}