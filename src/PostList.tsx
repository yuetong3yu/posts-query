import { useQuery } from 'react-query'

import { Post } from './type'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const PostList = () => {
  const { isLoading, status, data } = useQuery(
    'posts',
    () => axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`),
    {
      retry: false,
    }
  )

  if (isLoading) return <h2 className="loading-text">Loading...</h2>

  if (status === 'error') return <h1>Ops...Fetch failed</h1>

  return (
    <ul>
      {data?.data.map((post) => {
        return (
          <Link to={`/post/${post.id}`} key={post.id}>
            <li>{post.title}</li>
          </Link>
        )
      })}
    </ul>
  )
}
