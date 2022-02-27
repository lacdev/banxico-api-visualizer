import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Started from 'routes/started'
import Visualizer from 'routes/visualizer'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="start" element={<Started />} />
        <Route path="visualizer" element={<Visualizer />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
