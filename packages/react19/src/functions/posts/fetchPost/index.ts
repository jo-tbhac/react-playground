import type { Post } from '@/interface'

export const fetchPost = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'GET'
  })
  const data: Post = await response.json()
  return data
}
