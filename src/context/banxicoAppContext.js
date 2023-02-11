import { createContext, useState } from 'react'

import { removeSpaces, stringToUpperCase } from '../utils/text-utils'

export const BanxicoAppContext = createContext({})

export function BanxicoAppProvider({ children }) {
  const [series, setSeries] = useState({
    data: [],
    isLoading: false,
    isError: false,
  })

  const handleDataSubmit = (data) => {
    setSeries(data)
  }

  const [banxicoToken, setBanxicoToken] = useState({
    value: '',
    touched: false,
  })

  const [seriesToFetch, setSeriesToFetch] = useState({
    value: '',
    touched: false,
  })

  const handleBanxicoTokenInputChange = (event) => {
    let nextValue = removeSpaces(event.target.value)

    setBanxicoToken((prev) => ({
      ...prev,
      value: nextValue,
    }))
  }

  const handleSeriesInputChange = (event) => {
    let nextValue = stringToUpperCase(removeSpaces(event.target.value))

    setSeriesToFetch((prev) => ({
      ...prev,
      value: nextValue,
    }))
  }

  const handleBanxicoBlur = () => {
    setBanxicoToken((prev) => ({ ...prev, touched: true }))
  }

  const handleSeriesBlur = () => {
    setSeriesToFetch((prev) => ({ ...prev, touched: true }))
  }

  return (
    <BanxicoAppContext.Provider
      value={{
        series,
        handleDataSubmit,
        banxicoToken,
        seriesToFetch,
        handleBanxicoTokenInputChange,
        handleSeriesInputChange,
        handleBanxicoBlur,
        handleSeriesBlur,
      }}
    >
      {children}
    </BanxicoAppContext.Provider>
  )
}
