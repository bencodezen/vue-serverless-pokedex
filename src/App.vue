<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>Current Pokemon: {{ currentPokemon }}</h2>
  <p>{{ pokemonAttributes }}</p>
  <ul>
    <li
      v-for="pokemon in pokemonList"
      :key="`pokemon-${pokemon.entry_number}`"
      @click="setPokemon(pokemon.pokemon_species.name)"
    >
      ({{ pokemon.entry_number }}): {{ pokemon.pokemon_species.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    currentPokemon: '',
    pokemonList: {},
    pokemonAttributes: {}
  }),
  methods: {
    async setPokemon(pokemon) {
      this.currentPokemon = pokemon

      const response = await fetch('/.netlify/functions/pokemon', {
        method: 'POST',
        body: JSON.stringify({
          pokemon: pokemon
        })
      })
      const data = await response.json()

      this.pokemonAttributes = data.abilities
    }
  },
  async mounted() {
    const response = await fetch('/.netlify/functions/pokedex')
    const pokemonData = await response.json()

    this.pokemonList = pokemonData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
