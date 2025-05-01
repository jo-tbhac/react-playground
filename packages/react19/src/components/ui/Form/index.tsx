import type { FC } from 'react'

import type { FormProps } from './types'

export const Form: FC<FormProps> = (props) => {
  return <form {...props} />
}
