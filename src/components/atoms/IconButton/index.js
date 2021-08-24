import React from 'react'
import { IconButtonContainer } from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const IconButton = ({ iconName, onPress, fill, danger = false }) => {
  return (
    <IconButtonContainer onPress={onPress} danger={danger}>
      <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={30} />
    </IconButtonContainer>
  )
}
