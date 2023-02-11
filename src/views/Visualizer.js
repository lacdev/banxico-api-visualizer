import clsx from 'clsx'

import { SeriesContainer } from 'components/SeriesContainer'
import { LineChart } from 'components/LineChart'
import { ErrorMessage } from 'components/ErrorMessage'
import { LoadingMessage } from 'components/LoadingMessage'
import { Form } from 'components/Form'

import { useBanxicoAppContext } from '../hooks/useBanxicoAppContext'

export default function Visualizer() {
  const { series } = useBanxicoAppContext()

  return (
    <main className={clsx('p-2')}>
      <Form />
      {series.isError && <ErrorMessage />}
      {series.isLoading && <LoadingMessage />}
      {!series.isLoading && !series.isError && (
        <SeriesContainer>
          {series.data?.map((data) => (
            <LineChart key={data?.idSerie} data={data} />
          ))}
        </SeriesContainer>
      )}
    </main>
  )
}
