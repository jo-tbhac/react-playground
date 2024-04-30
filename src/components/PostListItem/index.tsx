import type { FC } from 'react'

import { PostListItemPresenter } from './presenter'
import type { PostListItemProps } from './types'

export const PostListItem: FC<PostListItemProps> = (props) => {
  return <PostListItemPresenter {...props} />
}
