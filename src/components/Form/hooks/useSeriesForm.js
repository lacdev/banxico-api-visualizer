import { useMemo, useState } from 'react'

import { getSeries } from '../../../api/seriesAPI'

import { removeSpaces, stringToUpperCase } from '../../../utils/text-utils'

export const useSeriesForm = ({ onSubmit }) => {
  const [banxicoToken, setBanxicoToken] = useState({
    value: '',
    touched: false,
  })

  const [seriesToFetch, setSeriesToFetch] = useState({
    value: '',
    touched: false,
  })

  const formHandlers = useMemo(() => {
    const handleBanxicoInputChange = (event) => {
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

    const handleBanxicoInputBlur = () => {
      setBanxicoToken((prev) => ({ ...prev, touched: true }))
    }

    const handleSeriesInputBlur = () => {
      setSeriesToFetch((prev) => ({ ...prev, touched: true }))
    }

    const handleFormSubmit = async (event) => {
      try {
        event.preventDefault()

        onSubmit((prev) => ({ ...prev, isError: false, isLoading: true }))

        const { data } = await getSeries(
          seriesToFetch?.value,
          banxicoToken?.value
        )

        onSubmit((prev) => ({ ...prev, data: data?.bmx?.series }))
      } catch {
        onSubmit((prev) => ({ ...prev, isError: true }))
      } finally {
        onSubmit((prev) => ({ ...prev, isLoading: false }))
      }
    }

    return {
      banxicoToken,
      seriesToFetch,
      handleBanxicoInputChange,
      handleBanxicoInputBlur,
      handleSeriesInputChange,
      handleSeriesInputBlur,
      handleFormSubmit,
    }
  }, [banxicoToken, seriesToFetch, onSubmit])

  return formHandlers
}
