import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { PostList } from './PostList'
import { About } from './About'
import { PostItem } from './PostItem'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'post',
        element: <PostList />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'post/:id',
        element: <PostItem />,
      },
    ],
  },
])
