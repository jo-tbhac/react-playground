import { Text } from '@/components/ui/Text'
import type { FC } from 'react'

import type { FormErrorMessageProps } from './types'

export const FormErrorMessage: FC<FormErrorMessageProps> = ({ children }) => {
  return (
    <Text color="error" fontSize="sm" pl={1}>
      {children}
    </Text>
  )
}
