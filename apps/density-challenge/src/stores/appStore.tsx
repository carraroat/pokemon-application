import { configureStore } from '@reduxjs/toolkit'
import pokeSlice from './slices/pokeSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
    reducer: {
        pokemon: pokeSlice.reducer,
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export default store
