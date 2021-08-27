import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { IconButton, Header } from '../../components'
import { WaterTankList } from '../../components/molecules'
import { WaterTanksContainer } from './styles'

export function WaterTanks() {
  const navigation = useNavigation()

  function handleCreateWaterTank() {
    navigation.navigate('WaterTank', { title: 'Criar', action: 'Adicionar' })
  }

  const item = [
    {
      key: 123,
      name: 'Teste',
      size: '12313'
    },
    {
      key: 12,
      name: 'Teste',
      size: '12313'
    }
  ]

  return (
    <>
      <Header title="Tanques" goBack="Home">
        <IconButton iconName="add" onPress={handleCreateWaterTank}></IconButton>
      </Header>
      <WaterTanksContainer>
        <WaterTankList data={item} />
      </WaterTanksContainer>
    </>
  )
}
