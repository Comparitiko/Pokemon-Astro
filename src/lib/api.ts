import type { Pokedex } from "../types/API-pokedex"
import type { Pokemon } from "../types/API-pokemon"
import type { Type, Types } from "../types/API-types"

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

export async function getPokedexWithLimit(offset:number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=${offset}`)
  const limitedPokedex: Pokedex = await res.json()
  return limitedPokedex
}

export async function getAllTypes () {
  const res = await fetch(`https://pokeapi.co/api/v2/type/`)
  const type: Types = await res.json()
  return type
}

export async function getTypeData(type:string) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
  const typeData: Type = await res.json()
  return typeData
}