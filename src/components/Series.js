import React from 'react'
import clsx from 'clsx'

import SeriesContainer from 'components/SeriesContainer'
import LineChart from 'components/LineChart'
import ErrorMessage from 'components/ErrorMessage'
import LoadingMessage from 'components/LoadingMessage'

import { useBanxicoAppContext } from '../hooks/useBanxicoAppContext'

const Series = React.memo(function Series() {
  const { series } = useBanxicoAppContext()

  return (
    <main className={clsx('p-2')}>
      {series.isError && <ErrorMessage />}
      {series.isLoading && <LoadingMessage />}
      {!series.isLoading && !series.isError && (
        <>
          <h3
            className={clsx(
              'text-center font-semibold text-sky-700 text-3xl p-8'
            )}
          >
            Time series information
          </h3>
          <SeriesContainer>
            {series.data?.map((data) => (
              <LineChart key={data?.idSerie} data={data} />
            ))}
          </SeriesContainer>
        </>
      )}
    </main>
  )
})

export default Series
