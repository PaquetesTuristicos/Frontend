var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjciLCJuYmYiOjE2MjQ1Nzg3MTUsImV4cCI6MTYyNTE4MzUxNSwiaWF0IjoxNjI0NTc4NzE1fQ.AuiMP4Pr9gElhDbSPvwb2EcBQX-FH0onLpQ2QYHaKkU'

var pagina = "http://localhost/paquetes/Frontend/admin/"

var bottomPanel = document.getElementById('bottomPanel');
var bottomReservas = document.getElementById('bottomReservas');
var bottomPaquetes = document.getElementById('bottomPaquetes');
var bottomViajes = document.getElementById('bottomViajes');
var bottomTransporte = document.getElementById('bottomTransporte');
var bottomUsuario = document.getElementById('bottomUsuario');

// active 
function buttomActive(){
    
}

// cabecera 
myHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE2MjQ2NjY2MTMsImV4cCI6MTYyNTI3MTQxMywiaWF0IjoxNjI0NjY2NjEzfQ.XgAwPjkC-1A2lW_d_pPAKMZQtPaPXIpw-3lMV0Bp0_U",
    credentials: 'include',
  });
// usuario 
bottomUsuario.addEventListener('click', function (e) {
    e.preventDefault()
    location.assign(pagina + "usuario/");
})

bottomPanel.addEventListener('click', function (e) {
    e.preventDefault()
    location.assign(pagina);
});