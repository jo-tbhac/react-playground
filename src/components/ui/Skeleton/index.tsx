import type { FC } from 'react'

import { Skeleton as ChakraSkeleton, SkeletonText as ChakraSkeletonText } from '@chakra-ui/react'

import type { SkeletonProps, SkeletonTextProps } from './types'

export const Skeleton: FC<SkeletonProps> = (props) => {
  return <ChakraSkeleton {...props} />
}

export const SkeletonText: FC<SkeletonTextProps> = (props) => {
  return <ChakraSkeletonText {...props} />
}
