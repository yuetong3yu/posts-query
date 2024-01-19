import { useState } from 'react'
import { useQuery } from 'react-query'

import { User } from './type'
import { getPostList } from './service'

export const UserList = () => {
  const [user, setUser] = useState<User[]>([])

  const { isLoading, status, data } = useQuery('posts', getPostList, {
    retry: 1,
  })

  if (isLoading) return <h2 className="loading-text">Loading...</h2>

  if (status === 'error') return <h1>Ops...Fetch failed</h1>

  console.log('1234 data', data)

  return (
    <ul>
      {data?.data.data.map((user) => {
        return <li key={user.id}>{user.firstName}</li>
      })}
    </ul>
  )
}
