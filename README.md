
<h1 align="center">Pokedex</h1>

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/team-imgs/gengar-3.gif" >

</p>

<p>
La base de la pokedex gira e torno al servicio que llama la PokeApi, esta funcion es llamada a cada uno de los componentes generados al inicio del proyecto y el TS de cada componente se encarga de llamar los datos requeridos desde la PokeAPI.

Hay 2 grupos de componentes en el proyecto dispuesto en su respectivas carpetas, en la carpeta Pages se encuetran los componentes "Details" y "Home

El segundo grupo esta ubicado en la carpeta Shared y se encuentran los componentes "Poke-header" "Poke-list" "Poke-search" "Poke-team", generando una estructura jerarquica como la que se ve a continuación
</p>

<h2 align="center" width="150px"> Estructura de carpetas</h2>
<ul>
<li>Pages
<ul>Details</ul>
<ul>Home</ul>
</li>
<li>Service</li>
<li>Shared
<ul>Poke-Header</ul>
<ul>Poke-List</ul>
<ul>Poke-Search</ul>
<ul>Poke-Team</ul>
</li>
</ul>

<h2 align="center">Descripción del servicio</h2>

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeService.jpeg" width="350px"> 

</p>

<p>
Se crea un metodo privado para llamar la pokeAPI, luego se crea un segundo metodo que se encargara de llamar a los pokemons mediante el uso de "GET", este metodo nos devolvera cada uno de los objetos listados en la API, ya que la funcionalidad "MAP", nos permite mapear cada uno de los los objetos dentro de "results" que para este vendria a ser cada pokemon y los atributos que los componen.

Se crea un metodo publico "apiGetPokemons" que es el que nos permitira tomar los datos de un poquemon especifico y desde cualquier otro componente.
</p>

<h2 align="center">Shared y sus componentes</h2>

<h3 align="center">Poke-header</h3>

<p align="center">
Es la cabecera general de la página, no tiene ninguna funcionalidad o logica programada.
</p>

<h3 align="center">Poke-list</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeList.jpeg" width="350px" > 

</p>

<p align="center">
En este componente se crea un metodo privado que nos permitio usar el servicio anteriormente creado, posteriormente se crea un metodo publico capaz de recibir cualquier tipo de variable, el documento HTML hace uso de un "NGfor" para iterar el template del listado de pokemons y un "ngFOrOf" para precisar la varaible desde donde se van a iterar los pokemons en este casp "getAllPokiemons"
</p>

<h3 align="center">Poke-Search</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeSearch.jpeg" width="350px"> 

</p>

<p align="center">
La función principal del poke-search este basada en dato de entrada que el usuario ponga en la barra de busqueda, gracias al decorador "@Output" podemos tomar valor de otro componentes esto nos permitira enlazar el buscador con la tabla de pokemons, a ese decorador le atribuimos una variable publica llamda "emmitSearch" que servira de puente entre el Input de data puesto en el HTML o buscador, los valores recibidos atravez de la funcion de TS "eventEmmiter" son de tipo string.
</p>

<h3 align="center">Poke-Team</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeSearch.jpeg" width="350px"> 

</p>

El Poke-Team esta formado por tarjetas de los datos especificos de cada pokemon al que se hace referencia, hace uso en un NGif y una variable llamada show con una funcion asociada con base a valores booleanos que permiten generar el Switch que nos permite crear y destruir el componente en tiempo real, lo que nos permite enseñar y ocultar el equipo sin alterar la distribucion de los otros componentes.

<h2 align="center">Pages y sus componentes</h2>

<h3 align="center">Home</h3>

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/TS-Home.jpeg" width="350px"> 

</p>

La función principal Home es poder usar los datos del servicio empleados en todos los otros modulos, a su vez el componente HTML es la ruta principal donde se importan cada uno de los etiquetas que enlezan a los componentes.

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/HTML-Home.jpeg" width="350px"> 

</p>


<h3 align="center">Poke-Details</h3>
<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeSearch.jpeg" width="350px"> 

</p>

<p align="center">
En este componente se ubican los datos especifcios de cada pokemon, esto se hace mediante la creacion de una varaible privada que hace referencia el decorador "ActivateRoute", seuido a esto mediante el elemento "GET" creamos una función que nos permita enrutar los valores de las tarjetas mediante el uso de 3 constantes "ID" "POKEMON" y "NAME".


