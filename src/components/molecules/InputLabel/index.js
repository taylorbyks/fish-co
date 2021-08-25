import React from 'react'
import { InputLabelContainer } from './styles'
import { Label, Input } from '../../atoms'

export const InputLabel = ({ label, value }) => {
  return (
    <InputLabelContainer>
      <Label>{label}</Label>
      <Input />
    </InputLabelContainer>
  )
}
