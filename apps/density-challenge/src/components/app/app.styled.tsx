import { styled, Box } from '@mui/material'

export const Layout = styled(Box)`
    display: flex;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;

    > div {
        flex: 1;
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
        width: '100%',
        height: 'fit-content',
        alignSelf: 'center',
    },
    '.pokemon-image': {
        position: 'relative',
        borderRadius: theme.borderRadius.div,
        boxShadow: `0.375rem 0.375rem 0.6rem 0rem ${theme.palette.grey[600]}`,
        backgroundColor: theme.palette.grey['100'],
        height: '100%',
        display: 'flex',
        padding: '1rem',
        marginTop: '1.5rem',
        justifyContent: 'center',
    },
}))
