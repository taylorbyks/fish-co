import React from 'react'
import { InputLabelContainer, LabelContainer } from './styles'
import { Label, Input } from '../../atoms'

export const InputLabel = ({ label, value, setValue }) => {
  return (
    <InputLabelContainer>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <Input value={value} onChangeText={e => setValue(e)}/>
    </InputLabelContainer>
  )
}
