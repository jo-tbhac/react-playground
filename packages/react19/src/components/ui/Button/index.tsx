import { Button as ChakraButton } from '@chakra-ui/react'
import type { FC } from 'react'

import type { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => {
  return <ChakraButton {...props} />
}
