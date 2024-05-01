import { useState } from 'react'

import { ThemeContext } from './context'
import { UsePageMetaData } from './meta'
import { UsePagePresenter } from './presenter'
import type { Theme } from './types'

export const UsePage = () => {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <>
      <UsePageMetaData />
      <ThemeContext value={theme}>
        <UsePagePresenter setTheme={setTheme} />
      </ThemeContext>
    </>
  )
}
