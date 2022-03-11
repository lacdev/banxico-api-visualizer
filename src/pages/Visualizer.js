import { useState } from 'react'
import { getSeries } from 'services/series'
import { SeriesContainer } from 'components/SeriesContainer'
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

  const handleTokenChange = (event) => {
    let banxicoTokenText = event.target.value
    setBanxicoToken(banxicoTokenText.replaceAll(' ', ''))
  }

  const handleSeriesChange = (event) => {
    let seriesText = event.target.value
    setSeriesToFetch(seriesText.replaceAll(' ', ''))
  }
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
            <LineChart key={data?.idSerie} data={data} />
          ))}
        </SeriesContainer>
      )}
    </main>
  )
}
