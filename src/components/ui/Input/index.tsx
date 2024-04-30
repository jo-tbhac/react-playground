import { Input as ChakraInput } from '@chakra-ui/react'
import type { FC } from 'react'

import type { InputProps } from './types'

export const Input: FC<InputProps> = (props) => {
  return <ChakraInput color="text" {...props} />
}
