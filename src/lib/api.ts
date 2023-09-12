import type { Pokedex } from "../types/API-pokedex"
import type { Pokemon } from "../types/API-pokemon"

export async function getPokemonByName (name:string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const pokemon: Pokemon = await res.json()
  return pokemon
}

export async function getAllPokedex () {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
  const pokedex:Pokedex = await res.json()
  return pokedex
}