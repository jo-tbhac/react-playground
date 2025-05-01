import type { FC } from 'react'
import { useRoute } from 'wouter'

import { NavLinkPresenter } from './presenter'
import type { NavLinkProps } from './types'

export const NavLink: FC<NavLinkProps> = (props) => {
  const [match] = useRoute(props.href ?? props.to)

  return <NavLinkPresenter isActive={match} {...props} />
}
