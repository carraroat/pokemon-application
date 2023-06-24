import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { IStore } from '../../global/interfaces/stores'
import { Layout, Image } from './app.styled'
import { Logo, Pokeball } from '../../assets'
import Loader from '../loader/loader'

const App = () => {
    const { pokemon } = useSelector((state: IStore) => state)
    const { pokemon: _pokemon, fetchPokemon: _fetch } = pokemon

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
                            alt={_pokemon?.name}
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
