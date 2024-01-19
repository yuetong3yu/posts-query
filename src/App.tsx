import { Link, Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <div className="root-container">
      Home Page
      <div className="tab-bar">
        <Link to={'/post'} title="post">
          Post
        </Link>
        <Link to={'/about'} title="about">
          About
        </Link>
      </div>
      <div className="content-block">
        <Outlet />
      </div>
    </div>
  )
}
