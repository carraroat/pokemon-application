import { createTheme } from '@mui/material'

declare module '@mui/material' {
    interface Theme {
        borderRadius: {
            div: string
            text: string
        }
    }
    interface ThemeOptions {
        borderRadius: {
            div: string
            text: string
        }
    }
    interface CommonColors {
        red: string
    }
}

const theme = createTheme({
    borderRadius: { div: '0.5rem', text: '0.25rem' },
    palette: {
        primary: {
            main: '#2a75bb',
            dark: '#3c5aa6',
        },
        secondary: {
            main: '#ffcb05',
            dark: '#c7a008',
        },
        common: {
            red: '#E3350D',
        },
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
        h2: {
            fontFamily: 'Lato, sans-serif',
        },
    },
})

export { theme }
