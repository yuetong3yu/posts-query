import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Post } from './type'

export const PostItem = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) return <h1>Ops...Post not found</h1>

  const { isLoading, data } = useQuery(`post_${id}`, () =>
    axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  )

  if (isLoading)
    return <h2 className="loading-text">Loading Post, ID: {id}...</h2>

  return <div>{data?.data.body}</div>
}
