export interface KeyValue {
    key: string
    value: string | number | boolean
}

export interface IPokemon {
    name: string
    url: string
}

export interface IPokemonDetailsAPI {
    name: string
    base_experience: number
    height: number
    stats: {
        base_stat: number
        effor: number
        stat: {
            name: string
        }
    }[]
    types: {
        type: {
            name: string
        }
    }[]
    abilities: {
        ability: {
            name: string
            is_hidden: boolean
        }
    }[]
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    }
}

export interface IPokemonDetails {
    name: string
    experience: number
    height: number
    stats: KeyValue[]
    types: string[]
    abilities: KeyValue[]
    image: string
}
