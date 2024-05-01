import { Radio as ChakraRadio, RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import type { FC } from 'react'

import type { RadioGroupProps, RadioProps } from './types'

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  return <ChakraRadioGroup {...props} />
}

export const Radio: FC<RadioProps> = (props) => {
  return <ChakraRadio {...props} />
}
