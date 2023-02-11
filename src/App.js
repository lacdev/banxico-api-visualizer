import { RouterProvider } from 'react-router-dom'
import { BanxicoAppProvider } from './context/banxicoAppContext'
import { appRoutes } from './routes/appRoutes'

export default function App() {
  return (
    <BanxicoAppProvider>
      <RouterProvider router={appRoutes} />
    </BanxicoAppProvider>
  )
}
