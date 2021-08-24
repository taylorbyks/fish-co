import React from 'react'
import { IconButton, Title, Header } from '../../components'
import { WaterTankCard, WaterTankList } from '../../components/molecules'
import { HomeContainer } from './styles'

export function Home() {
  const item = [{
    key: 123,
    name: "Teste",
    size: "12313"
  }, {
    key: 12,
    name: "Teste",
    size: "12313"
  }]
  return (
    <HomeContainer>
      <Header title="Tanques"><IconButton iconName="add"></IconButton></Header>
      <WaterTankList data={item}/>
    </HomeContainer>
  )
}
