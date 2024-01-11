import React from 'react'
import NavBar from '../../components/header'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import styles from './index.module.scss'
import Intro from '../intro'
import Skills from '../skills'

function App () {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
      // primary: {
      //   main: '#1976d2'
      // }
    }
  })
  return (
    <div className={styles.App}>
      <ThemeProvider theme={darkTheme}>
        {' '}
        <NavBar />
        <Intro />
        <Skills />
      </ThemeProvider>
    </div>
  )
}

export default App
