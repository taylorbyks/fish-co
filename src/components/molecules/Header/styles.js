import styled, { css } from 'styled-components/native'

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(110)}px;
    padding: ${theme.metrics.px(60)}px ${theme.metrics.px(15)}px ${theme.metrics.px(5)}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const HeaderLeftContainer = styled.View`
  width: 75%;
  align-items: flex-start;
  justify-content: center;
`

export const HeaderRightContainer = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`
