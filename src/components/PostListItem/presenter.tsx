import type { FC } from 'react'

import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card'
import { Text } from '@/components/ui/Text'

import type { PostListItemPresenterProps } from './types'

export const PostListItemPresenter: FC<PostListItemPresenterProps> = ({
  title,
  body,
  isSending = false
}) => {
  return (
    <Card opacity={isSending ? 0.6 : 1}>
      <CardHeader>
        <Text fontWeight="bold">{title}</Text>
      </CardHeader>
      <CardBody overflow="hidden">
        <Text lineClamp={3}>{body}</Text>
      </CardBody>
      {isSending && (
        <CardFooter>
          <Text>Sending...</Text>
        </CardFooter>
      )}
    </Card>
  )
}
