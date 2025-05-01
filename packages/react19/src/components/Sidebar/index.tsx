import type { FC } from 'react'

import { SidebarPresenter } from './presenter'
import type { SidebarProps } from './types'

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return <SidebarPresenter>{children}</SidebarPresenter>
}
