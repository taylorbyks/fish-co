import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { IconButton, Title } from '../../components'
import { HomeContainer } from './styles'

export function Welcome() {
  const navigation = useNavigation()

  function handleNext() {
    navigation.navigate('Home')
  }

  return (
    <HomeContainer>
      <Title>Fish.co</Title>
      <IconButton iconName="arrow-forward" onPress={handleNext}></IconButton>
    </HomeContainer>
  )
}
