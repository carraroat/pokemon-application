import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './components/routes'
import { Provider } from 'react-redux'
import store from './stores/appStore'
import { ThemeProvider } from '@mui/material'
import { theme } from './components/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={createBrowserRouter(routes)} />
            </Provider>
        </ThemeProvider>
    </StrictMode>
)
