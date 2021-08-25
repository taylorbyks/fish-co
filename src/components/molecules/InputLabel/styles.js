import styled, { css } from 'styled-components/native'

export const InputLabelContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(64)}px;
    display: flex;
    justify-content: space-between;
  `}
`