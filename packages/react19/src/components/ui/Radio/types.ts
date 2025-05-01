import type { RadioGroup as ChakraRadioGroup, RadioGroupRootProps } from '@chakra-ui/react'
import type { InputHTMLAttributes, RefObject } from 'react'

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  rootRef?: RefObject<HTMLDivElement | null>
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export type { RadioGroupRootProps }
