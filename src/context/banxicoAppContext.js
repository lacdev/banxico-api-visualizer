import { createContext, useCallback, useState } from 'react'

export const BanxicoAppContext = createContext({})

export function BanxicoAppProvider({ children }) {
  const [series, setSeries] = useState({
    data: [],
    isLoading: false,
    isError: false,
  })

  const handleDataSubmit = useCallback((data) => {
    setSeries(data)
  }, [])

  return (
    <BanxicoAppContext.Provider
      value={{
        series,
        handleDataSubmit,
      }}
    >
      {children}
    </BanxicoAppContext.Provider>
  )
}
