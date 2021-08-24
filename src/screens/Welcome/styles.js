import styled, { css } from 'styled-components/native'

export const HomeContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.metrics.px(134)}px ${theme.metrics.px(15)}px ${theme.metrics.px(134)}px;
  `}
`

export const MainImage = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(292)}px;
    height: ${theme.metrics.px(284)}px;
  `}
`
