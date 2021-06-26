var login =document.querySelector('#loginForm')

login.addEventListener('submit', function (e) {
    e.preventDefault();
    var datos = new FormData(login);
    let jsonDataConvert = JSON.stringify(
        {
            email: datos.get('email'),
            password: datos.get('password'),

        }               
    );
    console.log(jsonDataConvert)
    fetch(`https://localhost:44384/api/User/authenticate`, {
        method: 'POST',
        body: jsonDataConvert,
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            credentials: 'include',
        },
    })
        .then(res => {
            res.json()
        console.log(res)
        console.log(res.headers)
        console.log(res.body)
        if(res.status == 200){
            window.location.href = "../admin";
        }else{
            alert("Usuario o Contraseña incorrecta")
        }
    }) .then(console.log)
    ;
})