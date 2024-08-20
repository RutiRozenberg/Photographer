import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home.component'
import Services from './components/services.component'
import Signin from './components/signin.component'
import ResponsiveAppBar from './components/responsiveAppBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Meetings from './components/meetings.component'


const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#f48fb1', 
    },
    text: {
      primary: '#880e4f', 
      secondary: '#c2185b', 
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
    < >
      <BrowserRouter >
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar></ResponsiveAppBar>
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/meetings' element={<Meetings/>}/>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
