import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPokemonDetailsAPI } from '../../global/interfaces/pokemon'
import { IPokemonState } from '../../global/interfaces/slices'

const API = import.meta.env['VITE_URL_API']
const LIMIT_PER_PAGE = 20
const LIMIT_TOTAL = 151
const MAX_PAGE = Math.trunc(LIMIT_TOTAL / LIMIT_PER_PAGE)

const initialState: IPokemonState = {
    page: 0,
    maxPage: MAX_PAGE,
    pokemon: null,
    pokemons: [],
    fetchPokemon: '',
    fetchPokemons: '',
}

//store.page
export const fetchPokemons = createAsyncThunk(
    'getPokemons',
    async (page: number) => {
        const items =
            page <= MAX_PAGE ? LIMIT_PER_PAGE : LIMIT_TOTAL % LIMIT_PER_PAGE

        const response = await fetch(
            `${API}?offset=${page * LIMIT_PER_PAGE}&limit=${items}`,
            {
                method: 'GET',
                redirect: 'follow',
            }
        )
        return response.json()
    }
)

export const fetchPokemon = createAsyncThunk(
    'getPokemon',
    async (id: string) => {
        const response = await fetch(`${API}${id}`, {
            method: 'GET',
            redirect: 'follow',
        })
        return response.json()
    }
)

const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        nextPage: (state) => {
            state.page = state.page + 1
        },
        backPage: (state) => {
            state.page = state.page - 1
        },
        //fetchpokenmon
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.fetchPokemons = 'loading'
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.pokemons = action.payload['results']
                state.fetchPokemons = 'success'
            })
            .addCase(fetchPokemons.rejected, (state) => {
                state.fetchPokemons = 'error'
            })
            .addCase(fetchPokemon.pending, (state) => {
                state.fetchPokemon = 'loading'
            })
            .addCase(fetchPokemon.rejected, (state) => {
                state.fetchPokemon = 'error'
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                const p = action.payload as IPokemonDetailsAPI
                state.pokemon = {
                    name: p.name,
                    experience: p.base_experience,
                    height: p.height,
                    stats: p.stats.map((s) => {
                        return { key: s.stat.name, value: s.base_stat }
                    }),
                    types: p.types.flatMap((x) => x.type.name),
                    abilities: p.abilities.map((a) => {
                        return {
                            key: a.ability.name,
                            value: a.ability.is_hidden,
                        }
                    }),
                    image: p.sprites.other.dream_world.front_default,
                }
                state.fetchPokemon = 'success'
            })
    },
})

export const { nextPage, backPage } = pokeSlice.actions

export const getPoke = (state: IPokemonState) => state
export default pokeSlice
