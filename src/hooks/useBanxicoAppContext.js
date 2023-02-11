import { useContext } from 'react'

import { BanxicoAppContext } from '../context/banxicoAppContext'

export const useBanxicoAppContext = () => {
  const context = useContext(BanxicoAppContext)

  if (!context) {
    throw new Error(
      'useBanxicoAppContext must be used within a BanxicoAppProvider'
    )
  }

  return context
}
