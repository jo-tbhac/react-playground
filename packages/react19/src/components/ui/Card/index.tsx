import { Card as ChakraCard } from '@chakra-ui/react'
import type { FC } from 'react'

import type { CardBodyProps, CardFooterProps, CardHeaderProps, CardProps } from './types'

export const Card: FC<CardProps> = (props) => {
  return <ChakraCard.Root {...props} />
}

export const CardBody: FC<CardBodyProps> = (props) => {
  return <ChakraCard.Body {...props} />
}

export const CardFooter: FC<CardFooterProps> = (props) => {
  return <ChakraCard.Footer {...props} />
}

export const CardHeader: FC<CardHeaderProps> = (props) => {
  return <ChakraCard.Header {...props} />
}
