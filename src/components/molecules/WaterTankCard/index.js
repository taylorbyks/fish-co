import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { WaterTankCardText, WaterTankCardTitle, IconButton } from '../../atoms'
import { WaterTankContainer } from './styles'

export const WaterTankCard = ({ data, onPress, onRemove }) => {
  return (
    <Swipeable
      containerStyle={StyleSheet.create({width: 410})}
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <IconButton iconName="trash" onPress={onRemove} danger />
          </View>
        </Animated.View>
      )}
    >
      <WaterTankContainer onPress={onPress}>
        <WaterTankCardTitle>{data.name}</WaterTankCardTitle>
        <WaterTankCardText>Tamanho: {data.size} m²</WaterTankCardText>
      </WaterTankContainer>
    </Swipeable>
  )
}
