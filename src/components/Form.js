import { useState } from 'react'
import clsx from 'clsx'

import { getSeries } from 'api/seriesAPI'

export const Form = ({ onSubmit }) => {
  const [banxicoToken, setBanxicoToken] = useState({
    value: '',
    touched: false,
  })

  const [seriesToFetch, setSeriesToFetch] = useState({
    value: '',
    touched: false,
  })

  const handleBanxicoTokenInputChange = (event) => {
    let nextValue = event.target.value.replaceAll(' ', '')

    setBanxicoToken((currentVal) => ({
      ...currentVal,
      value: nextValue,
    }))
  }

  const handleSeriesInputChange = (event) => {
    let nextValue = event.target.value.replaceAll(' ', '')

    setSeriesToFetch((currentVal) => ({
      ...currentVal,
      value: nextValue,
    }))
  }

  const handleBanxicoBlur = () => {
    setBanxicoToken((currentVal) => ({ ...currentVal, touched: true }))
  }

  const handleSeriesBlur = () => {
    setSeriesToFetch((currentVal) => ({ ...currentVal, touched: true }))
  }

  const handleSubmit = async (event) => {
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

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        'border flex flex-col gap-4 max-w-4xl p-4  rounded-lg m-4 shadow-lg'
      )}
    >
      <label
        className={clsx('block text-gray-700 text-md font-semibold mb-1')}
        htmlFor="token"
      >
        Banxico Token
      </label>

      <input
        className={clsx(
          'shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
        )}
        placeholder="a6279286a585cb47fdf7b721211477..."
        required
        id="token"
        value={banxicoToken?.value}
        onChange={handleBanxicoTokenInputChange}
        onBlur={handleBanxicoBlur}
      />

      {banxicoToken.value.length === 0 && banxicoToken.touched && (
        <p className={clsx('text-red-400')}>
          A valid banxico token is required.
        </p>
      )}

      <label
        className={clsx('block text-gray-700 text-md font-semibold mb-1')}
        htmlFor="series"
      >
        Series
      </label>

      <input
        className={clsx(
          'shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
        )}
        placeholder={`SP74665,SF61745,SF60634,SF43773...`}
        required
        id="series"
        value={seriesToFetch?.value}
        onChange={handleSeriesInputChange}
        onBlur={handleSeriesBlur}
      />

      {seriesToFetch.value.length === 0 && seriesToFetch.touched && (
        <p className={clsx('text-red-400')}>
          Valid series for data fetching are required. Each serie needs to be
          comma separated.
        </p>
      )}

      <button
        className={clsx(
          'p-2 w-28 mt-1 cursor-pointer  border-sky-700 text-white bg-sky-700 font-semibold rounded-md'
        )}
        type="submit"
        onClick={onSubmit}
      >
        Fetch Series
      </button>
    </form>
  )
}
