import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { ActivityIndicator, FlatList } from 'react-native'
import { theme } from '../../../styles/themes'
import { WaterTankCard } from '../WaterTankCard'
import { WaterTankListContainer } from './styles'

export const WaterTankList = ({ data, onEndReached, loading }) => {
  const navigation = useNavigation()

  function handleWaterTankSelect(waterTank) {
    navigation.navigate('WaterTankEdit', { waterTank })
  }

  return (
    <WaterTankListContainer>
      <FlatList
        data={data}
        keyExractor={(item) => String(item.key)}
        renderItem={({ item }) => <WaterTankCard data={item} onPress={() => handleWaterTankSelect(item)} />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
        ListFooterComponent={loading ? <ActivityIndicator color={theme.colors.green} /> : <></>}
      />
    </WaterTankListContainer>
  )
}
