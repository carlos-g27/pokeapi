let pokemones = [];
let totalPokes = 1025;

// Conexión para obtener la lista de Pokémon
async function conexion(filtro) {
  if(filtro == "All"){
    //si quiero todos los pokemones
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
    const data = await res.json();
        return data.results;
  }else{
    //por tipo
    const res = await fetch(`https://pokeapi.co/api/v2/type/${filtro}`);
    const data = await res.json();

    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
    return pokemonesTipo;
    
  }
 
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexion("All");
  }
  Home();
}

General();

async function FiltroConexion(Elfiltro){
  document.getElementById("la-lista").innerHTML = "";
  pokemones = await conexion(Elfiltro);
  const listaHTML = GenerarLista(pokemones);
  document.getElementById("la-lista").innerHTML = listaHTML;
}