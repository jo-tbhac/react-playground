import type { Dispatch, SetStateAction } from 'react'

export interface UsePresenterProps {
  setTheme: Dispatch<SetStateAction<Theme>>
}

export type Theme = 'light' | 'dark'
