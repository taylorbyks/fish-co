import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Button, InputLabel, Header } from '../../components'
import { WaterTankContainer, WaterTankFormContainer } from './styles'
import { saveTank } from '../../services/storage'

export function WaterTank() {
  const routes = useRoute()
  const { title, action, tankSize, tankName } = routes.params
  const [name, setName] = useState(tankName || '')
  const [size, setSize] = useState(tankSize || '')

  const navigation = useNavigation()

  async function handleSave() {
    if(name === '' || size == ''){

      return
    }

    const newTank = {
      name,
      size
    }

    try {
      await saveTank(newTank)
    } catch (error) {
      console.log(error)
    }

    navigation.navigate('WaterTanks')
  }

  return (
    <>
      <Header title={title} goBack="WaterTanks"></Header>
      <WaterTankContainer>
        <WaterTankFormContainer>
          <InputLabel label="Nome:" value={name} setValue={setName} />
          <InputLabel label="Tamanho:" value={size} setValue={setSize} />
        </WaterTankFormContainer>
        <Button text={action} onPress={handleSave} />
      </WaterTankContainer>
    </>
  )
}
