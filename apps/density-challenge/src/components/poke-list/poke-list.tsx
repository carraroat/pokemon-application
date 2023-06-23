import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Container, PokeListWrapper } from './poke-list.styled'
import { IStore } from '../../global/interfaces/stores'
import { useAppDispatch } from '../../stores/appStore'
import pokeSlice, {
    fetchPokemon,
    fetchPokemons,
} from '../../stores/slices/pokeSlice'
import Loader from '../loader/loader'
import { ChevronLeft, ChevronRight } from '../../assets'
import { Button } from '../global.styled'

const PokeList = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { pokemon } = useSelector((state: IStore) => state)
    const { nextPage, backPage } = pokeSlice.actions

    useEffect(() => {
        dispatch(fetchPokemons(pokemon.page))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon.page])

    return (
        <Container>
            {pokemon.page > 0 ? (
                <Button>
                    <ChevronLeft onClick={() => dispatch(backPage())} />
                </Button>
            ) : (
                <Button sx={{ visibility: 'hidden' }} />
            )}
            <PokeListWrapper>
                {pokemon.fetchPokemons === 'loading' ? <Loader /> : null}
                {pokemon.pokemons.map((p) => (
                    <div
                        className={`option ${
                            p.name === pokemon.pokemon?.name ? 'selected' : ''
                        }`}
                        onDoubleClick={() => navigate(`/pokemons/${p.name}`)}
                        onClick={() => dispatch(fetchPokemon(p.name))}
                        key={p.name}
                    >
                        <span>{p.name}</span>
                    </div>
                ))}
            </PokeListWrapper>
            {pokemon.page <= pokemon.maxPage && (
                <Button>
                    <ChevronRight onClick={() => dispatch(nextPage())} />
                </Button>
            )}
        </Container>
    )
}

export default PokeList
