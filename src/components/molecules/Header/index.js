import React from 'react'
import { HeaderContainer, HeaderRightContainer, HeaderLeftContainer } from './styles'
import { Title } from '../../atoms'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native'

export const Header = ({ title, children, goBack, goBackDisable = false }) => {
  const navigation = useNavigation()

  function handleGoBack() {
    console.log(goBack)
    navigation.navigate(goBack)
  }

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        {
          !goBackDisable &&
          <Button title="< Voltar" onPress={handleGoBack}/>
        }
        <Title>{title}</Title>
      </HeaderLeftContainer>
      <HeaderRightContainer>{children}</HeaderRightContainer>
    </HeaderContainer>
  )
}
