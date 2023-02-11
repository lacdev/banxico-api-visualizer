import { render } from 'react-dom'
import { RouterProvider } from 'react-router-dom'

import { appRoutes } from './routes/appRoutes'

import './index.css'

const rootElement = document.getElementById('root')

render(<RouterProvider router={appRoutes} />, rootElement)
