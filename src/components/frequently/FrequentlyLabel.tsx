import React from 'react'
import styled from '@emotion/styled'
import { FrequentlyLabelStyle } from '../../types/frequentlyStyles'

interface Props extends FrequentlyLabelStyle {
  text: string
}

const Label = styled.span<FrequentlyLabelStyle>(({ fontSize, fontColor, fontWeight }) => ({
  fontSize,
  color: fontColor,
  fontWeight: fontWeight ? fontWeight : 'normal'
}))

const FrequentlyLabel: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <Label>{text}</Label>
  )
}

export default FrequentlyLabel
