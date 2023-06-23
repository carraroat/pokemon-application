import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Typography } from '@mui/material'
import { IStore } from '../../global/interfaces/stores'
import {
    Container,
    Stat,
    ButtonTitle,
    Data,
    General,
} from './poke-details.styled'
import { fetchPokemon } from '../../stores/slices/pokeSlice'
import { useAppDispatch } from '../../stores/appStore'
import { ChevronLeft } from '../../assets'
import { Button } from '../global.styled'

const PokeDetails = () => {
    const navigate = useNavigate()
    const { pokemon } = useSelector((state: IStore) => state)
    const { pokemon: p } = pokemon
    const dispatch = useAppDispatch()
    const params = useParams()

    useEffect(() => {
        if (!p && params['name']) {
            dispatch(fetchPokemon(params['name']))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <ButtonTitle>
                <Button>
                    <ChevronLeft onClick={() => navigate(-1)} />
                </Button>
                <Typography variant="h4">{p?.name}</Typography>
            </ButtonTitle>
            <General>
                <Typography variant="caption">Height: {p?.height}cm</Typography>
                <Typography variant="caption">
                    Experience: {p?.experience}
                </Typography>
            </General>
            <Typography variant="subtitle1">Type</Typography>
            <Data>
                {p?.types.map((x) => (
                    <Typography
                        key={x}
                        variant="caption"
                        className="text-wrapper"
                    >
                        {x}
                    </Typography>
                ))}
            </Data>
            <Typography variant="subtitle1">Abilities</Typography>
            <Data>
                {p?.abilities.map((x) => (
                    <Typography
                        key={x.key}
                        variant="caption"
                        className="text-wrapper"
                    >
                        {x.key}
                    </Typography>
                ))}
            </Data>
            <Typography variant="subtitle1">Stats</Typography>
            {p?.stats.map((x) => (
                <Typography variant="caption" key={x.key}>
                    {x.key}
                    <Stat width={`${x.value}%`} />
                </Typography>
            ))}
        </Container>
    )
}

export default PokeDetails
