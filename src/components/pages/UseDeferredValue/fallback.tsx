import type { FC } from 'react'

import { Box } from '@/components/ui/Box'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { Skeleton, SkeletonText } from '@/components/ui/Skeleton'

export const Fallback: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={6}>
      <Card>
        <CardHeader>
          <Skeleton height="20px" />
        </CardHeader>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton height="20px" />
        </CardHeader>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton height="20px" />
        </CardHeader>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </Box>
  )
}
