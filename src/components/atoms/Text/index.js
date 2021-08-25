import styled, { css } from 'styled-components/native'

const BaseText = styled.Text`
  ${({ theme, mt, mb, ml, mr }) => css`
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(28)}px;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.bold};
  `}
`

export const Label = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.semibold};
  `}
`

export const InputSectionLabel = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.semibold};
  `}
`

export const ButtonText = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(22)}px;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.bold};
  `}
`

export const WaterTankCardText = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
  `}
`

export const WaterTankCardTitle = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.semibold};
  `}
`
