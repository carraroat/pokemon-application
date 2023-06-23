import { PokeballRound } from '../../assets'
import { LoaderWrapper } from './loader.styled'

const Loader = () => {
    return (
        <LoaderWrapper>
            <PokeballRound />
            <span>Loading...</span>
        </LoaderWrapper>
    )
}

export default Loader
