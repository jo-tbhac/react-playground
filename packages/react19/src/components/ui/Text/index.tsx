import { Text as ChakraText } from '@chakra-ui/react'
import type { FC } from 'react'

import type { TextProps } from './types'

export const Text: FC<TextProps> = (props) => {
  return <ChakraText as="span" color="text" {...props} />
}
