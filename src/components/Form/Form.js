import React from 'react'
import clsx from 'clsx'

import { useBanxicoAppContext } from '../../hooks/useBanxicoAppContext'

import { useSeriesForm } from './hooks/useSeriesForm'

const Form = React.memo(function Form() {
  const { handleDataSubmit } = useBanxicoAppContext()

  const {
    banxicoToken,
    handleFormSubmit,
    seriesToFetch,
    handleBanxicoInputChange,
    handleBanxicoInputBlur,
    handleSeriesInputChange,
    handleSeriesInputBlur,
  } = useSeriesForm({ onSubmit: handleDataSubmit })

  return (
    <form
      onSubmit={handleFormSubmit}
      className={clsx(
        'border flex flex-col gap-4 max-w-4xl p-4  rounded-lg m-4 shadow-lg'
      )}
    >
      <label
        className={clsx('block text-gray-700 text-md font-semibold ')}
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
        onChange={handleBanxicoInputChange}
        onBlur={handleBanxicoInputBlur}
      />

      {banxicoToken.value.length === 0 && banxicoToken.touched && (
        <p className={clsx('text-red-400')}>
          A valid banxico token is required.
        </p>
      )}

      <label
        className={clsx('block text-gray-700 text-md font-semibold')}
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
        onBlur={handleSeriesInputBlur}
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
      >
        Fetch Series
      </button>
    </form>
  )
})

export default Form
