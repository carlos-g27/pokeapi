function GenerarLista(pokemones){
    var listapokes;
    for(var i = 0; i < pokemones.length; i++){
        id = pokemones[i].url.split("/")[6];
        nombre = pokemones[i].name
        listapokes += `
            <div class="un-pokemon" onclick="Detalle(${id})">
                <p>${id} ${nombre}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${nombre}">
            </div>
        `
    } 
    return listapokes
}


function buscadorfuncion(asa){
    if(asa.length >= 3){
        const filtrados = [];
        for (let i = 0; i < pokemones.length; i++) {
            const nombre = pokemones[i].name.toLowerCase();
            if (nombre.includes(asa.toLowerCase())) {
                filtrados.push(pokemones[i]);
            }
        }
        let listaHTML = GenerarLista(filtrados)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }else{
        let listaHTML = GenerarLista(pokemones)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
}

function Home(){
    var root = document.getElementById("root");
    root.innerHTML = ""
    
    //buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });

    //filtro   
    const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];
    
    const filtro = document.createElement("div");

    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]); 
        });

        // Agregar el botón al contenedor
        filtro.appendChild(btn);
    }
    
    //listas
    const listaHTML = GenerarLista(pokemones);
    var contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-lista");
    contenedorLista.innerHTML = listaHTML;

    //agregar
    document.getElementById("root").appendChild(buscador);
    document.getElementById("root").appendChild(filtro);
    document.getElementById("root").appendChild(contenedorLista);
    contenedorLista.id = "la-lista";
    console.log(GenerarLista(pokemones));


}