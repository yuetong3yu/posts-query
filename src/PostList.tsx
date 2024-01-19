import { useState } from 'react'
import { User } from './type'

export const PostList = () => {
  const [user, setUser] = useState<User[]>([])

  return (
    <ul>
      <li></li>
    </ul>
  )
}
