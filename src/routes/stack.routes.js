import React from 'react'
import { IconButton } from '../components'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome, Home } from '../screens'

import { theme } from '../styles/themes'

const stackRoutes = createNativeStackNavigator()

export const AppRoutes = () => (
  <stackRoutes.Navigator screenOptions={{ cardStyle: { backgroundColor: theme.colors.white } }}>
    {/* <stackRoutes.Screen name="Welcome" component={Welcome} /> */}
    <stackRoutes.Screen name="Home" options={{headerShown: false}} component={Home} />
  </stackRoutes.Navigator>
)

export const AppRoutesAuth = () => (
  <stackRoutes.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: theme.colors.white } }}>
    <stackRoutes.Screen name="Home" component={Home} />
  </stackRoutes.Navigator>
)
