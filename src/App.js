import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="font-semibold text-4xl">
        Banxico data <span className="font-bold text-sky-700">visualizer</span>
      </h1>
      <nav className="border-b-4 pb-1 border-sky-700">
        <Link to="/start">Get Started</Link>
        <Link to="/visualizer">Visualizer</Link>
      </nav>
    </div>
  )
}

export default App
