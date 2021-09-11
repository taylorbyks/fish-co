import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { IconButton, Header } from '../../components'
import { WaterTankList } from '../../components/molecules'
import { WaterTanksContainer } from './styles'
import { loadTanks } from '../../services/storage'

export function WaterTanks() {
  const navigation = useNavigation()
  const [tanks, setTanks] = useState([])

  function handleCreateWaterTank() {
    navigation.navigate('WaterTank', { title: 'Criar', action: 'Adicionar' })
  }

  useEffect(async () => {
    try {
      const tanks = await loadTanks()
      console.log(tanks)
    } catch (error) {}
  }, [])

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
