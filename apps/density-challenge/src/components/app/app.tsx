import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Layout, Image } from './app.styled'
import { Logo, Pokeball } from '../../assets'
import Loader from '../loader/loader'
import { getPoke } from '../../stores/slices/pokeSlice'

const App = () => {
    const pSlice = useSelector(getPoke)
    const { pokemon: _pokemon, fetchPokemon: _fetch } = pSlice

    return (
        <Layout>
            <Image>
                <Logo className="logo" />
                <div className="pokemon-image">
                    {!_pokemon?.image ? (
                        <Pokeball className="img-pokemon" />
                    ) : (
                        <img
                            className="img-pokemon"
                            alt={_pokemon.name}
                            src={_pokemon?.image}
                        />
                    )}
                    {_fetch === 'loading' ? <Loader /> : null}
                </div>
            </Image>
            <Outlet />
        </Layout>
    )
}

export default App
