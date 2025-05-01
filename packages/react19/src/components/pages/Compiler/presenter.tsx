import { useState } from 'react'

import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'

const CountButton = ({ label, onClick }: { label: string; onClick: () => void }) => {
  console.log(`${label} button rendered.`)

  return (
    <Button type="button" onClick={onClick}>
      {label}
    </Button>
  )
}

export const CompilerPagePresenter = () => {
  'use memo'
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((current) => current + 1)
  }

  const decrement = () => {
    setCount((current) => current - 1)
  }

  return (
    <Box>
      <Box display="flex" gap={4} alignItems="center">
        <CountButton label="−" onClick={decrement} />
        <Text>{count}</Text>
        <CountButton label="＋" onClick={increment} />
      </Box>
    </Box>
  )
}
