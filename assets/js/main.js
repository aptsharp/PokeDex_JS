const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

console.log(document.getElementById("pokemonList"));

fetch(url)
  .then((response) => response.json()) //volta uma promise de N
  .then((jsonBody) => jsonBody.results) // volta o results - que é a lista de Pokémon's
  .then((pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      pokemonList.innerHTML == convertPokemonTali(pokemon);
    }
  })
  //encadeamento de then's pode ser possível transformar a chamada.
  .catch(function (error) {
    console.log(error);
  });
