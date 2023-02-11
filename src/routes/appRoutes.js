import { createBrowserRouter } from 'react-router-dom'

import Home from '../views/Home'
import Visualizer from '../views/Visualizer'
import Started from '../views/Started'
import NotFound from '../views/NotFound'

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { element: <Started />, index: true },
      {
        path: 'visualizer',
        element: <Visualizer />,
      },
    ],
  },
])
