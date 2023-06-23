import { Box, alpha, styled } from '@mui/material'

export const LoaderWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: alpha(theme.palette.grey[200], 0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
    flexDirection: 'column',
    backdropFilter: 'blur(0.125rem)',

    svg: {
        width: '10%',
        height: '10%',
        animation: 'spin 1s linear infinite',
    },

    span: {
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.875rem',
        display: 'block',
        animation: 'typing 1s linear infinite',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: 0,
    },

    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    },

    '@keyframes typing': {
        from: { width: 0 },
        to: { width: '20%' },
    },
}))

export const Data = styled(Box)``
