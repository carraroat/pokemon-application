import React from 'react'
import PokeList from './poke-list/poke-list'
import PokeDetails from './poke-details/poke-details'
const App = React.lazy(() => import('./app/app'))

export const routes = [
    {
        path: '/',
        element: <App />,
        name: 'Home',
        children: [
            {
                path: '/pokemons',
                name: 'Pokemon Details',
                element: <PokeList />,
            },
            {
                path: '/pokemons/:name',
                element: <PokeDetails />,
            },
        ],
    },
]
