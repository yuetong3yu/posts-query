import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { PostList } from './PostList'
import { About } from './About'

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
    ],
  },
])
