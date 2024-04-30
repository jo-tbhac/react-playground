import {
  Card as ChakraCard,
  CardBody as ChakraCardBody,
  CardFooter as ChakraCardFooter,
  CardHeader as ChakraCardHeader
} from '@chakra-ui/react'
import type { FC } from 'react'

import type { CardBodyProps, CardFooterProps, CardHeaderProps, CardProps } from './types'

export const Card: FC<CardProps> = (props) => {
  return <ChakraCard {...props} />
}

export const CardBody: FC<CardBodyProps> = (props) => {
  return <ChakraCardBody {...props} />
}

export const CardFooter: FC<CardFooterProps> = (props) => {
  return <ChakraCardFooter {...props} />
}

export const CardHeader: FC<CardHeaderProps> = (props) => {
  return <ChakraCardHeader {...props} />
}
