import { use } from 'react'
import type { FC } from 'react'
import useSWR from 'swr'

import { Box } from '@/components/ui/Box'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { CircularProgress } from '@/components/ui/CircularProgress'
import { FormLabel } from '@/components/ui/FormLabel'
import { Radio, RadioGroup } from '@/components/ui/Radio'
import type { RadioGroupRootProps } from '@/components/ui/Radio/types'
import { Text } from '@/components/ui/Text'
import { fetchPost } from '@/functions/posts'

import { ThemeContext } from './context'
import type { Theme, UsePresenterProps } from './types'

const POST_ID = 1

export const UsePagePresenter: FC<UsePresenterProps> = ({ setTheme }) => {
  const { data: post } = useSWR(['/post', POST_ID], ([, postId]) => fetchPost(postId))

  if (post == null) {
    return (
      <Box w="100%" h="40%" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress value={null} stroke="blue.500" />
      </Box>
    )
  }

  /**
   * @see https://react.dev/reference/react/use
   */
  const theme = use(ThemeContext)

  const handleChangeTheme: RadioGroupRootProps['onValueChange'] = (event) => {
    if (event.value) {
      setTheme(event.value as Theme)
    }
  }

  const cardBackgroundColor = theme === 'light' ? 'white' : 'gray.700'
  const cardTextColor = theme === 'light' ? 'text' : 'white'

  return (
    <Box>
      <Box mb={6}>
        <FormLabel>Theme</FormLabel>
        <RadioGroup value={theme} onValueChange={handleChangeTheme}>
          <Box display="flex" gap={4}>
            <Radio value="light">Light</Radio>
            <Radio value="dark">Dark</Radio>
          </Box>
        </RadioGroup>
      </Box>

      <Box>
        <FormLabel>Preview</FormLabel>
        <Card bgColor={cardBackgroundColor}>
          <CardHeader>
            <Text fontWeight="bold" color={cardTextColor}>
              {post.title}
            </Text>
          </CardHeader>
          <CardBody overflow="hidden">
            <Text color={cardTextColor}>{post.body}</Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  )
}
