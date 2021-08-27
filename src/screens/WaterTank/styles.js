import styled, { css } from 'styled-components/native'

export const WaterTankContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: flex-start;
    justify-content: space-around;
    padding: ${theme.metrics.px(40)}px ${theme.metrics.px(15)}px ${theme.metrics.px(48)}px;
  `}
`

export const WaterTankFormContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${theme.metrics.px(40)}px ${theme.metrics.px(15)}px ${theme.metrics.px(48)}px;
  `}
`
