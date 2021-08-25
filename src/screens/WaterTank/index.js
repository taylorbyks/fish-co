import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Button, InputLabel, Header } from '../../components'
import { WaterTankContainer } from './styles'

export function WaterTank() {
  const navigation = useNavigation()

  const routes = useRoute()

  const {
    title, action, size, name
  } = routes.params

  function handleSave() {
    navigation.navigate('WaterTanks')
  }

  return (
    <WaterTankContainer>
      <Header title={title} goBack="WaterTanks"></Header>
      <InputLabel label="Nome:" />
      <Button text={action} onPress={handleSave} />
    </WaterTankContainer>
  )
}
