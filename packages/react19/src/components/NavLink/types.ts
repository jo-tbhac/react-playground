import type { LinkProps as WouterLinkProps } from 'wouter'

export type NavLinkProps = WouterLinkProps

export type NavLinkPresenterProps = NavLinkProps & {
  isActive: boolean
}
