import styled, { css } from 'styled-components/native'

export const WaterTanksContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding: ${theme.metrics.px(40)}px ${theme.metrics.px(15)}px ${theme.metrics.px(48)}px;
  `}
`