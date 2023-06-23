import { Box, styled } from '@mui/material'

export const ButtonTitle = styled(Box)(() => ({
    display: 'flex',
}))

export const Container = styled(Box)(() => ({
    textTransform: 'capitalize',

    h4: {
        textTransform: 'uppercase',
        letterSpacing: '0.125rem',
        textAlign: 'center',
        width: '100%',
    },
}))

export const General = styled(Box)(({ theme }) => ({
    margin: '1rem 0rem',
    borderBottom: `2px solid ${theme.palette.secondary.dark}`,
    padding: '0.25rem',

    span: {
        display: 'block',
    },
}))

export const Data = styled(Box)(({ theme }) => ({
    display: 'flex',
    paddingBottom: '1rem',

    '.text-wrapper': {
        borderRadius: theme.borderRadius.text,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        flex: 1,
        textAlign: 'center',
        padding: '0.125rem 0.625rem',

        '&:not(:last-of-type)': {
            marginRight: '1rem',
        },
    },
}))

export const Stat = styled(Box)<{ width: string }>(({ theme, width }) => ({
    background: theme.palette.primary.dark,
    height: '1rem',
    borderRadius: '0rem 1rem 1rem 0rem',
    width: width,
}))
