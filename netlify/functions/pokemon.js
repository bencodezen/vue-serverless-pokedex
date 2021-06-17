const fetch = require('node-fetch')

exports.handler = async event => {
  const selectedPokemon = JSON.parse(event.body)

  console.log(selectedPokemon.pokemon)

  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${selectedPokemon.pokemon}`
  )
  const data = await pokemonResponse.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
