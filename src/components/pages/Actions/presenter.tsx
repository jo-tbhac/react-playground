import { useActionState, useOptimistic, useRef, useState } from 'react'
import type { FC } from 'react'
import { startTransition } from 'react'
import { requestFormReset } from 'react-dom'

import { PostListItem } from '@/components/PostListItem'
import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { FormErrorMessage } from '@/components/ui/FormErrorMessage'
import { FormLabel } from '@/components/ui/FormLabel'
import { Input } from '@/components/ui/Input'
import { Text } from '@/components/ui/Text'
import { Textarea } from '@/components/ui/Textarea'
import { createPost } from '@/functions/posts'
import type { Post } from '@/interface'

import type { FormErrorMessages } from './types'

export const ActionsPagePresenter: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [posts, setPosts] = useState<Post[]>([])
  const [preview, setPreview] = useState<{ title: string; body: string } | null>(null)

  // @see https://react.dev/reference/react/useOptimistic
  const [optimisticPosts, setOptimisticPosts] = useOptimistic(posts)

  /**
   * useActionStateを使用してバリデーションを実装してみた
   * ただアクションの戻り値が何であれフォームの値が自動的にリセットされてしまうのでこの使い方は微妙かも（バリデーションに引っかかったとしてもフォームの値が消える）
   * ControlledComponentなら綺麗に動きそうだが、それだとformActionのメリット半減な気もする
   * @see https://react.dev/reference/react/useActionState
   */
  const [formErrors, formAction, isPending] = useActionState<FormErrorMessages, FormData>(
    async (_, values) => {
      const title = values.get('title') as string
      const body = values.get('body') as string
      const errors: FormErrorMessages = {}
      if (!title) {
        errors.title = 'Title is Required'
      }
      if (!body) {
        errors.body = 'Body is Required'
      }
      if (errors.title || errors.body) {
        return errors
      }

      setOptimisticPosts((currentPosts) => [{ id: 0, userId: 0, title, body }, ...currentPosts])

      const newPost = await createPost({ title, body })
      setPosts((currentPosts) => [newPost, ...currentPosts])
      setPreview(null)
      return {}
    },
    {}
  )

  /**
   * formActionでもフォームが初期化されてしまうのでプレビューとしてのUXは良くない...
   * ドキュメントだとフォームが初期化されていない気がするんだけど、書き方間違ってるのか...
   * @see https://react.dev/reference/react-dom/components/form#handling-multiple-submission-types
   */
  const handlePreview = (values: FormData) => {
    const title = values.get('title') as string
    const body = values.get('body') as string
    setPreview({ title, body })
  }

  const handleResetForm = () => {
    startTransition(() => {
      if (formRef.current) {
        requestFormReset(formRef.current)
        setPreview(null)
      }
    })
  }

  return (
    <Box display="flex" gap={6}>
      <Box flex={1}>
        <Form ref={formRef} action={formAction}>
          <Box mb={4}>
            <FormLabel>Title</FormLabel>
            <Input name="title" />
            {formErrors.title && <FormErrorMessage>{formErrors.title}</FormErrorMessage>}
          </Box>
          <Box mb={4}>
            <FormLabel>Body</FormLabel>
            <Textarea name="body" resize="vertical" />
            {formErrors.body && <FormErrorMessage>{formErrors.body}</FormErrorMessage>}
          </Box>
          <Box display="flex" gap={3} mb={6}>
            <Button colorPalette="blue" type="submit" loading={isPending}>
              Create
            </Button>
            <Button variant="outline" disabled={isPending} type="submit" formAction={handlePreview}>
              Preview
            </Button>
            <Button variant="outline" disabled={isPending} type="button" onClick={handleResetForm}>
              Reset
            </Button>
          </Box>
          <Box>
            <FormLabel>Preview</FormLabel>
            {preview && <PostListItem title={preview.title} body={preview.body} />}
          </Box>
        </Form>
      </Box>

      <Box flex={1} px={8}>
        <FormLabel>Posts</FormLabel>
        {optimisticPosts.length === 0 ? (
          <Box h="100%" w="100%" display="flex" alignItems="center" justifyContent="center">
            <Text>No Posts</Text>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={4}>
            {optimisticPosts.map((post, index) => (
              <PostListItem
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                title={post.title}
                body={post.body}
                isSending={post.id === 0}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}
