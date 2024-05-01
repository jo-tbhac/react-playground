import { CircularProgress as ChakraCircularProgress } from '@chakra-ui/react'
import type { FC } from 'react'

import type { CircularProgressProps } from './types'

export const CircularProgress: FC<CircularProgressProps> = (props) => {
  return <ChakraCircularProgress {...props} />
}
