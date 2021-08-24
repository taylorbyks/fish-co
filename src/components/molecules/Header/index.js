import React from 'react'
import { HeaderContainer, HeaderRightContainer, HeaderLeftContainer } from './styles'
import { Title } from '../../atoms'

import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native'

export const Header = ({ title, children }) => {
  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Button title="< Voltar" />
        <Title>{title}</Title>
      </HeaderLeftContainer>
      <HeaderRightContainer>{children}</HeaderRightContainer>
    </HeaderContainer>
  )
}
