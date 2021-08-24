import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles/themes'
import { Home } from './src/screens'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  )
}
