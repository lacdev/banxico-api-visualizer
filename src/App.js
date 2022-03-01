import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="m-auto">
      <h1 className="font-bold text-6xl m-4">Banxico data visualizer</h1>
      <nav className="border-b-4 pb-4 border-sky-700 m-4">
        <Link className="text-3xl mr-4" to="/start">
          Get Started
        </Link>
        <Link className="text-3xl pl-2" to="/visualizer">
          Visualizer
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
