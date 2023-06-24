import { styled, Box, alpha } from '@mui/material'

export const Container = styled(Box)`
    flex: 1;
    display: flex;
`

export const PokeListWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    fontFamily: theme.typography.fontFamily,
    textTransform: 'capitalize',
    width: '100%',
    borderRadius: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0rem 0.5rem',
    'div.option': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0.5rem',
        width: '48%',
        margin: '1%',
        cursor: 'pointer',
        boxShadow: `0.125rem 0.125rem 0.25rem ${theme.palette.grey[700]}`,
        span: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            padding: '0.25rem 0.5rem',
        },
        '&:hover, &.selected': {
            boxShadow: `0.125rem 0.125rem 0.25rem ${theme.palette.secondary.dark}`,
            color: theme.palette.secondary.dark,
            borderColor: theme.palette.secondary.dark,
            backgroundColor: alpha(theme.palette.secondary.main, 0.4),
        },
    },
}))
