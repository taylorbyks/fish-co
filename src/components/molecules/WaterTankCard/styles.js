import styled, { css } from 'styled-components/native'

export const WaterTankContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 90%;
    align-items: center;
    background-color: ${theme.colors.grey};
    border-radius: ${theme.metrics.px(20)}px;
    margin: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(20)}px ${theme.metrics.px(10)}px;
  `}
`
