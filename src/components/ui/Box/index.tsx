import { Box as ChakraBox } from '@chakra-ui/react'
import type { FC } from 'react'

import type { BoxProps } from './types'

export const Box: FC<BoxProps> = (props) => {
  return <ChakraBox {...props} />
}
