import clsx from 'clsx'
import { Outlet, NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className={clsx('m-auto')}>
      <h1
        className={clsx(
          'text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-600   mx-4 mt-4 mb-8'
        )}
      >
        Banxico data visualizer
      </h1>
      <nav className={clsx('pb-4 font-medium border-sky-700 m-4')}>
        <NavLink
          className={({ isActive }) =>
            clsx(
              isActive
                ? 'text-3xl mr-4 text-sky-700 border-b-2 border-sky-700'
                : 'text-3xl font-normal mr-4 text-gray-600'
            )
          }
          to="/"
        >
          Get started
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(
              isActive
                ? 'text-3xl mr-4 text-sky-700 border-b-2 border-sky-700'
                : 'text-3xl font-normal mr-4 text-gray-600'
            )
          }
          to="/visualizer"
        >
          Visualizer
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
