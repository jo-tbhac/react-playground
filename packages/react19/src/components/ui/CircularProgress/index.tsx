import { ProgressCircle as ChakraCircularProgress } from '@chakra-ui/react'
import type { FC } from 'react'

import type { CircularProgressProps } from './types'

export const CircularProgress: FC<CircularProgressProps> = ({ stroke, value }) => {
  return (
    <ChakraCircularProgress.Root value={value}>
      <ChakraCircularProgress.Circle>
        <ChakraCircularProgress.Track />
        <ChakraCircularProgress.Range stroke={stroke} />
      </ChakraCircularProgress.Circle>
    </ChakraCircularProgress.Root>
  )
}
