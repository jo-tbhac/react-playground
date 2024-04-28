import { ChakraBaseProvider } from '@chakra-ui/react'
import type { FC, PropsWithChildren } from 'react'

import { theme } from './theme'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
}
