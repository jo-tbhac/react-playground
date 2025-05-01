import { Suspense } from 'react'

import { Fallback } from './fallback'
import { UseDeferredValuePageMetaData } from './meta'
import { UseDeferredValuePagePresenter } from './presenter'

export const UseDeferredValuePage = () => {
  return (
    <>
      <UseDeferredValuePageMetaData />
      <Suspense fallback={<Fallback />}>
        <UseDeferredValuePagePresenter />
      </Suspense>
    </>
  )
}
