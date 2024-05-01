import type { FC } from 'react'
import { Route, Switch } from 'wouter'

import { NavLink } from '@/components/NavLink'
import { Sidebar } from '@/components/Sidebar'
import { ActionsPage } from '@/components/pages/Actions'
import { UsePage } from '@/components/pages/Use'
import { UseDeferredValuePage } from '@/components/pages/UseDeferredValue'
import { Box } from '@/components/ui/Box'
import { path } from '@/router'
import { ThemeProvider } from '@/theme'

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Box display="flex" h="100vh" w="100%">
        <Sidebar>
          <NavLink href={path.actions}>Actions</NavLink>
          <NavLink href={path.useDeferredValue}>useDeferredValue</NavLink>
          <NavLink href={path.use}>use</NavLink>
        </Sidebar>

        <Box flex={1} py={4} px={12}>
          <Switch>
            <Route path={path.actions} component={ActionsPage} />
            <Route path={path.useDeferredValue} component={UseDeferredValuePage} />
            <Route path={path.use} component={UsePage} />
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
