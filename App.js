import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import { theme } from './src/styles/themes'
import { Routes } from './src/routes'
import { useFonts, Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik'

export default function App() {
  const [FontsLoaded] = useFonts({ Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold })

  if (!FontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  )
}
