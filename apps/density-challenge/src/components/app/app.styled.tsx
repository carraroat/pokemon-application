import { styled, Box } from '@mui/material'

export const Layout = styled(Box)`
    display: flex;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;

    > div {
        flex: 1;
        box-sizing: border-box;
        max-width: 50%;
    }

    @media only screen and (max-width: 800px) {
        display: block;

        > div {
            margin: 0;
            max-width: 100%;
            height: 100%;

            img {
                width: 100%;
            }

            &:last-of-type {
                padding-top: 1rem;
            }
        }
    }
`

export const Image = styled(Box)(({ theme }) => ({
    marginRight: '1rem',
    padding: '1.5rem',
    backgroundColor: theme.palette.common.red,
    borderRadius: theme.borderRadius.div,
    display: 'flex',
    flexDirection: 'column',

    '.logo': {
        minHeight: '20%',
        width: '100%',
        height: 'fit-content',
        alignSelf: 'center',
    },
    '.pokemon-image': {
        position: 'relative',
        borderRadius: theme.borderRadius.div,
        boxShadow: `0.375rem 0.375rem 0.6rem 0rem ${theme.palette.grey[600]}`,
        backgroundColor: theme.palette.grey['100'],
        maxHeight: '65%',
        height: '100%',
        display: 'flex',
        padding: '5%',
        marginTop: '5%',
        justifyContent: 'center',
    },
}))
