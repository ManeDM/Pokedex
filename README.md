
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

<img src="https://github.com/ManeDM/Pokedex/blob/main/src/assets/read_img/PokeService.jpeg" >

</p>
Se crea un metodo privado para llamar la pokeAPI, luego se crea un segundo metodo que se encargara de llamar a los pokemons mediante el metodo GET, este metodo nos devolvera 
<p>

</p>