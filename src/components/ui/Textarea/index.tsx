import { Textarea as ChakraTextarea } from '@chakra-ui/react'
import type { FC } from 'react'

import type { TextareaProps } from './types'

export const Textarea: FC<TextareaProps> = (props) => {
  return <ChakraTextarea color="text" {...props} />
}
