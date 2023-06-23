import { Response } from '../types/response'
import { IPokemon, IPokemonDetails } from './pokemon'

export interface IPokemonState {
    page: number
    maxPage: number
    pokemon: IPokemonDetails | null
    pokemons: IPokemon[]
    fetchPokemon: Response
    fetchPokemons: Response
}
