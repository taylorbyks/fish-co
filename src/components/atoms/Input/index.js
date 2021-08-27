import styled, { css } from 'styled-components/native'

export const Input = styled.TextInput`
  ${({ theme, selected }) => css`
    border-bottom-width: ${theme.metrics.px(1)}px;
    border-bottom-color: ${selected ? theme.colors.secundary : theme.colors.primary};
    text-align: center;
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.text};
    width: 95%;
    margin-bottom: ${theme.metrics.px(20)}px;
    padding: ${theme.metrics.px(10)}px;
  `}
`
