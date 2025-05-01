import type { FC } from 'react'
import { Link } from 'wouter'

import { Box } from '@/components/ui/Box'
import { Text } from '@/components/ui/Text'

import type { NavLinkPresenterProps } from './types'

export const NavLinkPresenter: FC<NavLinkPresenterProps> = ({ children, isActive, ...props }) => {
  const styles = isActive
    ? { bg: 'blue.100', fontWeight: 'bold' }
    : { bg: 'white', _hover: { bg: 'gray.100' } }

  return (
    <Link {...props}>
      <Box p={3} pl={6} borderRightRadius="4px" {...styles}>
        <Text>{children}</Text>
      </Box>
    </Link>
  )
}
