


Informe de trabajo final - Grupo Sprinters

Conde, Juan; Hromek, Emil: Zarza, Sergio


Resumen 
En este apartado detallarán el objetivo, la misión o visión del software, contando desde su brevemente como a sido el desarrollo del mismo, como se encontraba el equipo antes de este desarrollo y como finalizó, a nivel técnico (conocimientos de desarrollo de software) y a nivel personal (trabajo en equipo, compañerismo, etc). (Times New Roman 11)

El objetivo del presente trabajo era diseñar un sitio web (tanto backend como frontend) para una pyme cuyo negocio es la venta de paquetes ya armados, los cuales incluyen destinos, hoteles y más entidades. El equipo en general no contaba con amplios conocimientos de desarrollo web (exceptuando asuntos de frontend, para el caso de uno de los integrantes). Al finalizar el trabajo, el equipo se encontraba mucho más capacitado para trabajar.
A nivel personal, hubo algunas dificultades de organización para poder trabajar, pero siempre hubo colaboración entre los miembros del equipo.

Metodología

En este apartado detallarán la metodología de trabajo que emplearon para el desarrollo. pueden detallar un poco de scrum y de cómo se organizó el equipo. (Times New Roman 11)


Para este trabajo se utilizó la metodología Scrum. La misma se desarrolló en 3 sprints:

Sprint 1: desde 12/04 a 10/05
Sprint 2: desde 13/05 a 14/06
Sprint 3: desde 17/06 a 18/07

Se organizó un product backlog y un sprint backlog, utilizando Jira. A cada integrante del equipo se le asignó una serie de tareas, que podían variar en el transcurso del proyecto.

Herramientas

En este apartado detallarán las herramientas empleadas para la completa construcción del software indicando para que fue utilizada cada herramienta, ejemplo: Postman: nos permitió realizar pruebas de nuestras APIs (Times New Roman 11)


Se utilizaron las siguientes herramientas para trabajar el proyecto:

Visual Studio (para redactar y compilar código)
Visual Studio Code (para redactar y compilar código)
Postman (para testeo de endpoints de las APIs)
Jira (para organizar las tareas)
Algo más?


Arquitectura

En este apartado detallarán la arquitectura final de su proyecto identificando cada uno de los micro servicios y detallando brevemente su función en el ecosistema. También pueden mencionar las base de datos que utilizaron y visualizar un DER de la misma. (Times New Roman 11)

El proyecto se dividió en tres microservicios para el backend, los cuales se detallan a continuación:

Microservicio paquetes: este microservicio se encarga del manejo de entidades tales como destinos, comentarios sobre destinos, hoteles, habitaciones de hoteles, paquetes y reservas. El mismo guarda y devuelve información sobre las entidades.
Microservicio viajes: este microservicio se encarga del manejo de entidades tales como los viajes asociados a las reservas, así como las entidades relacionadas a estos: buses, choferes, empresas de buses, terminales…
Microservicio usuarios: este microservicio maneja el control de acceso al sistema, al tener control sobre las entidades relacionadas a los usuarios.

Cada microservicio tiene acceso a una base de datos (tres en total). No hay conexión entre ellos. Directamente alimentan al frontend. 

(acá faltarían los DERs)


Funcionalidades
En este apartado detallarán todas las funcionalidades que realiza la aplicación, las mismas deben ser detalladas y demostradas a través de imágenes. Cada imagen cargada debe estar centrada, con un tamaño razonable y tener su pie de foto con una numeración y un detalle de la misma.(Times New Roman 11)
Funcionalidad x: Login
En este apartado detallarán  la funcionalidad x de su aplicación cada imagen que se utiliza debe ser referenciada en el texto. Ejemplo: La Figura x demuestra cómo se ve la pantalla de login, la Figura x + 1 muestra cómo se ejecuta la acción de login (Times New Roman 11)
Funcionalidad x + 1: Etc
En este apartado detallarán  la funcionalidad x + 1 de su aplicación  (Times New Roman 11)

Funcionalidad 1: barra principal de navegación
Esta es la barra de navegación, ubicada en la parte superior de la página. Desde acá se puede acceder a las diversas secciones del sitio web, como se puede ver en la figura 1.

Figura 1: barra de navegación
Funcionalidad 2: paquetes
En la sección paquetes, que se ve directamente al entrar al sitio (abajo de la barra de navegación), se pueden ver los paquetes disponibles, junto con su información pertinente y un enlace para acceder a la reserva del mismo.


Figura 2: paquetes

Funcionalidad 3: detalle de paquetes
Al hacer click en un paquete, se accede a una página en donde se puede ver en más detalle la información del paquete elegido.



Figura 3: detalle de paquetes

Funcionalidad 4: destinos
Al hacer click en la sección destinos de la barra de navegación, se puede ver el listado de destinos para los cuales existen paquetes disponibles. Desde ahí mismo se puede acceder a los paquetes.



Figura 4: detalle de destinos

Funcionalidad 5: reserva
Desde la página de información de un paquete, se puede acceder a la reserva del mismo.

Figura 5: reserva de paquete

Funcionalidad 6: panel de administración
El sitio tiene un panel para administrar todo y ver la información que se ha cargado.



Figura 6: administración










Funcionalidad 7: administración de hoteles
El panel de administración tiene una sección para crear, editar y eliminar hoteles.


Figura 7: administración de hoteles

Funcionalidad 8: administración de paquetes
El panel posee una sección desde donde se pueden crear y borrar paquetes.


Figura 8: administración de paquetes






Funcionalidad 9: administración de reservas
El panel posee una sección desde donde se pueden administrar las reservas creadas por los clientes, también se puede crear una nueva.


Figura 9: administración de reservas
Funcionalidad 10: administración de transportes
El panel posee una función para administrar los buses asociados a los paquetes.


Figura 10: administración de paquetes
Funcionalidad 11: administración de usuarios
El panel posee una función para administrar los usuarios del sitio web.


Figura 11: administración de usuarios

Funcionalidad 12: administración de viajes
El panel posee una sección para administrar los viajes asociados a las reservas


Figura 12: administración de viajes

Funcionalidad 13: administración de destinos
El panel posee una sección para administrar los destinos existentes.



Figura 13: administración de destinos


Código fuente
En este apartado se debe adjuntar los link de los repositorios con el código fuente; Ejemplo: Microservicio Ventas: www.github.com fecha de consulta: xx/xx/20xx (Times New Roman 11)

Frontend: https://github.com/PaquetesTuristicos/Frontend. Fecha de consulta: 22/07/2021
Microservicio usuario: https://github.com/PaquetesTuristicos/MicroServicioUsuario. Fecha de consulta: 22/07/2021
Microservicio paquetes: https://github.com/PaquetesTuristicos/Microservicio_Paquetes. Fecha de consulta: 22/07/2021
Microservicio viajes: https://github.com/PaquetesTuristicos/MicroServViaje. Fecha de consulta: 22/07/2021

Contacto
En este apartado agregan de nuevo sus nombres con un email de contacto. (Times New Roman 11)

Integrantes:

Conde, Juan. Correo electrónico: juancapo2010@gmail.com
Hromek, Emil. Correo electrónico: emil233@live.com.ar
Zarza, Sergio. Correo electrónico



