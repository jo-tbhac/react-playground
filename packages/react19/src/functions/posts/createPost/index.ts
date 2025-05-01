import type { Post } from '@/interface'

export const createPost = async (params: { title: string; body: string }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const data: Post = await response.json()
  return data
}
