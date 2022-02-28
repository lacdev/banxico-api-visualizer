import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="m-auto">
      <h1 className="font-semibold text-4xl">Banxico data visualizer</h1>
      <nav className="border-b-4 pb-1 border-sky-700">
        <Link className="text-2xl" to="/start">
          Get Started
        </Link>
        <Link className="text-2xl pl-2" to="/visualizer">
          Visualizer
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
