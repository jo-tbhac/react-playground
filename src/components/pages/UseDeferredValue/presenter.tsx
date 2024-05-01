import { useDeferredValue, useMemo, useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import useSWR from 'swr'

import { PostListItem } from '@/components/PostListItem'
import { Box } from '@/components/ui/Box'
import { FormLabel } from '@/components/ui/FormLabel'
import { Input } from '@/components/ui/Input'
import { fetchPosts } from '@/functions/posts'

export const UseDeferredValuePagePresenter: FC = () => {
  // https://swr.vercel.app/ja/docs/suspense
  const { data: posts } = useSWR('/posts', fetchPosts, { suspense: true })

  const [query, setQuery] = useState('')
  // https://react.dev/reference/react/useDeferredValue
  const deferredQuery = useDeferredValue(query)

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) => post.title.includes(deferredQuery) || post.body.includes(deferredQuery)
    )
  }, [posts, deferredQuery])

  return (
    <Box pb={6}>
      <Box mb={8}>
        <FormLabel>Search</FormLabel>
        <Input value={query} onChange={handleChangeQuery} />
      </Box>

      <Box display="flex" flexDirection="column" gap={6}>
        {filteredPosts.map((post) => (
          <PostListItem key={post.id} title={post.title} body={post.body} />
        ))}
      </Box>
    </Box>
  )
}
