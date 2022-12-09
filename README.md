
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

<h2>Descripción del servicio</h2>

<p align="center">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeService.jpeg" width="350px"> 

</p>

<p>
Se crea un metodo privado para llamar la pokeAPI, luego se crea un segundo metodo que se encargara de llamar a los pokemons mediante el uso de "GET", este metodo nos devolvera cada uno de los objetos listados en la API, ya que la funcionalidad "MAP", nos permite mapear cada uno de los los objetos dentro de "results" que para este vendria a ser cada pokemon y los atributos que los componen.

Se crea un metodo publico "apiGetPokemons" que es el que nos permitira tomar los datos de un poquemons especifico.
</p>

<h2>Shared y sus componentes</h2>

<h3>Poke-header</h3>

<p>
Es la cabecera general de la página, no tiene ninguna funcionalidad o logica programada.
</p>

<h3>Poke-list</h3>
<p align="left">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeList.jpeg" width="350px"> 

</p>

<p>
En este componente se crea un metodo privado que nos permitio usar el servicio anteriormente creado, posteriormente se crea un metodo publico capaz de recibir cualquier tipo de variable, el documento HTML hace uso de un "NGfor" para iterar el template del listado de pokemons y un "ngFOrOf" para precisar la varaible desde donde se van a iterar los pokemons en este casp "getAllPokiemons"
</p>

<h3>Poke-Search</h3>
<p align="left">

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeSearch.jpeg" width="350px"> 

</p>

<p>
En este componente se crea un metodo privado que nos permitio usar el servicio anteriormente creado, posteriormente se crea un metodo publico capaz de recibir cualquier tipo de variable, el documento HTML hace uso de un "NGfor" para iterar el template del listado de pokemons y un "ngFOrOf" para precisar la varaible desde donde se van a iterar los pokemons en este casp "getAllPokiemons"
</p>