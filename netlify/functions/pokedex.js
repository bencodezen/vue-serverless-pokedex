const fetch = require('node-fetch')

exports.handler = async () => {
  const pokedexResponse = await fetch('https://pokeapi.co/api/v2/pokedex/1')
  const data = await pokedexResponse.json()

  const originalPokedex = data.pokemon_entries.slice(0, 151)

  return {
    statusCode: 200,
    body: JSON.stringify(originalPokedex)
  }
}
