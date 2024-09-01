import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home.component'
import Services from './components/services.component'
import Signin from './components/signin.component'
import ResponsiveAppBar from './components/responsiveAppBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Meetings from './components/meetings.component'
import { Provider } from 'react-redux'
import { store } from './store/store'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ed9ba7',
      light: '#fbd4d5',
      dark: '#ef8295',
    },
    secondary: {
      main: '#54a1ac',
      light: '#b5d5d6',
      dark: '#395e73',
    },
    text: {
      primary: '#54a1ac',
      secondary: '#ed9ba7',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
  },
});


function App() {

  return (

    <Provider store={store}>
      <BrowserRouter >
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<ResponsiveAppBar/>} >
              <Route index element={<Home/>} />
              <Route path="/services" element={<Services />} />
              <Route path='/meetings' element={<Meetings />} />
              <Route path="/signin" element={<Signin />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>

  )
}

export default App
