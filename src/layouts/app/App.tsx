import React from 'react'
import NavBar from '../../components/header'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App () {
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2'
      },
    }
  })
  return (
    <div className='App'>
      <ThemeProvider theme={darkTheme}>
        {' '}
        <NavBar />
      </ThemeProvider>
    </div>
  )
}

export default App
