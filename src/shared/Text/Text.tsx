import { ReactNode } from 'react'
import { Text as RNText } from 'react-native'

type Props = {
  text?: string
  children?: ReactNode
}

export function Text({ text, children }: Props) {

  const content = text || children

  return (
    <RNText>
      {content}
    </RNText>
  )
}