import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Started from 'routes/Started'
import Visualizer from 'routes/Visualizer'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="start" element={<Started />} />
        <Route path="visualizer" element={<Visualizer />} />
        <Route
          path="*"
          element={
            <main className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4">
              <p>Oop 404 There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
