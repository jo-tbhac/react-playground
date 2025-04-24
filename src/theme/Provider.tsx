import { ChakraProvider } from '@chakra-ui/react'
import type { FC, PropsWithChildren } from 'react'

import { system } from './theme'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
