import type { FC } from 'react'

import { Box } from '@/components/ui/Box'

import type { SidebarPresenterProps } from './types'

export const SidebarPresenter: FC<SidebarPresenterProps> = ({ children }) => {
  return (
    <Box w={240} h="100%" py={4}>
      {children}
    </Box>
  )
}
