import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './styles/App.scss'
import Header from 'container/header/Header'

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
        </StyledEngineProvider>
    )
}

export default App
