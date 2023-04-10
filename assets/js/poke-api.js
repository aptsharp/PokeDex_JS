const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  fetch(url)
  .then(response => response.json()) //volta uma promise de N
  .then((jsonBody) => jsonBody.results) // volta o results - que é a lista de Pokémon's
  .catch()
};

// ser dono da plataforma! contra o jogo

// dar uma olhada em assincronismo promisses observable