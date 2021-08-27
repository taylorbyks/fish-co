import styled, { css } from 'styled-components/native'

export const InputLabelContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${theme.metrics.px(15)}px;
  `}
`

export const LabelContainer = styled.View`
  ${({ theme }) => css`
    width: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  `}
`