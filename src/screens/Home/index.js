import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Button, Header } from '../../components'
import { HomeContainer } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleCreateWaterTank() {
    navigation.navigate("WaterTanks")
  }

  return (
    <HomeContainer>
      <Header title="Fish.co" goBackDisable></Header>
      <Button text="Tanques" onPress={handleCreateWaterTank} />
    </HomeContainer>
  )
}
