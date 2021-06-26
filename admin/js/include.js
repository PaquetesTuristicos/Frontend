function head() {
    usuario.innerHTML = ''
    usuario.innerHTML = `
<main>
  <h1 class="visually-hidden">Splinter Panel</h1>

  

  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Splinter Panel</span>
    </a>
    <hr>
    <button><a href="../index.html">Sitio Web</a></button>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a id="bottomInicio" href="#" class="nav-link " aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Inicio
        </a>
      </li>
      <li>
        <a id="bottomPanel" href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Panel
        </a>
      </li>
      <li>
        <a id="bottomReservas" href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Reservas
        </a>
      </li>
      <li>
        <a id="bottomPaquetes" href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Paquetes
        </a>
      </li>
      <li>
        <a id="bottomViajes" href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Viajes
        </a>
      </li>
      <li>
        <a id="bottomTransporte" href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Transportes
        </a>
      </li>
      <li>
        <a id="bottomUsuario" href="usuario/index.html" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Usuarios
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="image/usuario.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Empleado</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">Perfil</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="login.html">Salir</a></li>
      </ul>
    </div>
  </div>

  <div class="b-example-divider"></div>

<!-- Contenido  -->

<div id="contenido" class="container">
    <div>
        <div>
            <H3>Titulo</H3>
        </div>
    </div>
    
    <div>
        <div>
            
                <button type="button" class="btn btn-success">Nuevo Paquete</button>
                <button type="button" class="btn btn-primary">Buscar paquete</button>
              
                <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Configuracion
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a class="dropdown-item" href="#">nose</a></li>
                    <li><a class="dropdown-item" href="#">definir</a></li>
                  </ul>
                </div>
              
        </div>
    </div>
    <div class="row justify-content-center align-items-center">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Destino</th>
                <th scope="col">Facha salida</th>
                <th scope="col">Precio</th>
                <th scope="col">accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>calafate</td>
                <td>2021-08-01</td>
                <td>$ 31000</td>
                <td>
                    <button type="button" class="btn btn-outline-primary">Editar</button>
                    <button type="button" class="btn btn-outline-danger">Borrar</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Salta</td>
                <td>2021-08-01</td>
                <td>$ 25000</td>
                <td>
                    <button type="button" class="btn btn-outline-primary">Editar</button>
                    <button type="button" class="btn btn-outline-danger">Borrar</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mendoza</td>
                <td>2021-08-01</td>
                <td>$ 25000</td>
                <td>
                    <button type="button" class="btn btn-outline-primary">Editar</button>
                    <button type="button" class="btn btn-outline-danger">Borrar</button>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
</div>
    `
}