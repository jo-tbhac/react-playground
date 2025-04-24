import { Text } from '@chakra-ui/react'
import type { FC } from 'react'

import type { FormLabelProps } from './types'

export const FormLabel: FC<FormLabelProps> = (props) => {
  return <Text color="text" fontWeight="bold" fontSize="sm" pl={1} pb={1} m={0} {...props} />
}
