/*Cuando selecciones un Pokémon y hagas clic en el botón 
"Obtener Información", se tendrá que mostrar 
la información en pantalla del Pokémon, 
incluyendo su nombre, imagen, tipo, altura y peso.*/
//height, name, types, weight,sprites.front_default

const apiPokemon = 'https://pokeapi.co/api/v2/pokemon/';
console.log(apiPokemon);
const obtenerPokemon = document.getElementById('get-pokemon');
const informacionPokemon = document.createElement('div');
informacionPokemon.classList.add('div-container');

obtenerPokemon.addEventListener('click', ()=>{
    const seleccionarPokemon = document.getElementById('pokemon-select').value;
    fetch(`${apiPokemon}${seleccionarPokemon}`)
    .then(response => {
        if(!response.ok){
            throw new Error('No funciona la página')
        }
        return response.json();
    }).then(data =>{
        
       informacionPokemon.innerHTML = `
       <h2>Nombre: ${data.name}</h2>
       <h2>Altura: ${data.height}</h2>
       <h2>Peso: ${data.weight}</h2>
       <img src=${data.sprites.front_default} alt=Imagen pokemon>
       <h2>Tipo: ${data.types[0].type.name}`


      console.log(data);
 
       const imprimirPokemon = document.querySelector('.container');
       
       imprimirPokemon.appendChild(informacionPokemon);
       /*data.types.forEach(element => {
        element += data.types.type.name;
        console.log(element);*/
    });
       
       console.log(informacionPokemon);
    }).catch(error =>{
        error = 'No se encuentra la página';
    })
