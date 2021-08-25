import styled, { css } from 'styled-components/native'

export const IconButtonContainer = styled.TouchableOpacity`
  ${({ theme, danger }) => css`
    width: ${danger ? theme.metrics.px(100) : theme.metrics.px(52)}px;
    height: ${danger ? theme.metrics.px(80) : theme.metrics.px(52)}px;
    margin-top: ${danger ? theme.metrics.px(10) : theme.metrics.px(0)}px;
    margin-right: ${danger ? theme.metrics.px(25) : theme.metrics.px(0)}px;
    background-color: ${danger ? theme.colors.red : theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.metrics.px(25)}px;
  `}
`
