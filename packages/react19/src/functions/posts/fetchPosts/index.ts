import type { Post } from '@/interface'

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
  const data: Post[] = await response.json()
  return data
}
