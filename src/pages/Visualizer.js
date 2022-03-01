import { useState } from 'react'
import { getSeries } from 'services/series'
import { SeriesContainer } from 'components/SeriesContainer'
// import { BarChart } from 'components/BarChart'
import { LineChart } from 'components/LineChart'
import { ErrorMessage } from 'components/ErrorMessage'
import { LoadingMessage } from 'components/LoadingMessage'
import { Form } from 'components/Form'

export default function Visualizer() {
  const [banxicoToken, setBanxicoToken] = useState('')
  const [seriesToFetch, setSeriesToFetch] = useState('')
  const [seriesData, setSeriesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      setSeriesData([])

      if (isError) {
        setIsError(false)
      }

      setIsLoading(true)

      const data = await getSeries(seriesToFetch, banxicoToken)

      setSeriesData(data?.bmx?.series)

      setIsLoading(false)
    } catch (e) {
      setIsError(true)

      setIsLoading(false)
    }
  }

  const handleTokenChange = (event) => setBanxicoToken(event.target.value)

  const handleSeriesChange = (event) => setSeriesToFetch(event.target.value)

  return (
    <main className="p-2">
      <Form
        onSubmit={handleSubmit}
        onTokenChange={handleTokenChange}
        onSeriesChange={handleSeriesChange}
      />

      {isError && <ErrorMessage />}

      {isLoading && !isError ? (
        <LoadingMessage />
      ) : (
        <SeriesContainer>
          {seriesData.map((data) => (
            // <BarChart key={data?.idSerie} data={data} /> //Pending BarChart conditional implementation.
            <LineChart key={data?.idSerie} data={data} />
          ))}
        </SeriesContainer>
      )}
    </main>
  )
}
