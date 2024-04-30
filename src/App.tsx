import type { FC } from 'react'
import { Route, Switch } from 'wouter'

import { NavLink } from '@/components/NavLink'
import { Sidebar } from '@/components/Sidebar'
import { ActionsPage } from '@/components/pages/Actions'
import { TransitionsPage } from '@/components/pages/Transitions'
import { Box } from '@/components/ui/Box'
import { path } from '@/router'
import { ThemeProvider } from '@/theme'

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Box display="flex" h="100vh" w="100%">
        <Sidebar>
          <NavLink href={path.actions}>Actions</NavLink>
          <NavLink href={path.transitions}>Transitions</NavLink>
        </Sidebar>

        <Box flex={1} py={4} px={12}>
          <Switch>
            <Route path={path.actions} component={ActionsPage} />
            <Route path={path.transitions} component={TransitionsPage} />
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
