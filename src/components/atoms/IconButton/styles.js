import styled, { css } from 'styled-components/native'

export const IconButtonContainer = styled.TouchableOpacity`
  ${({ theme, danger }) => css`
    width: ${theme.metrics.px(48)}px;
    height: ${theme.metrics.px(48)}px;
    background-color: ${danger ? theme.colors.red : theme.colors.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(25)}px;
  `}
`
