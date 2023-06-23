import { styled, Box } from '@mui/material'

export const Button = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    svg: {
        cursor: 'pointer',
        width: ' 1.125rem',
        height: '1.125rem',
        fill: theme.palette.grey[400],

        '&:hover': {
            fill: theme.palette.secondary.dark,
        },
    },
}))
