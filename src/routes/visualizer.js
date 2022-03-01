import { useState } from 'react'
import { getSeries } from 'services/series'
import { SeriesContainer } from 'components/SeriesContainer'
import { ChartLine } from 'components/LineChart'
import { Form } from 'components/Form'

export default function Visualizer() {
  const [banxicoToken, setBanxicoToken] = useState('')
  const [seriesToFetch, setSeriesToFetch] = useState('')
  const [seriesData, setSeriesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const classes = {
    errorMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 m-4',
    loadingMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 m-4',
  }

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
      {isError && (
        <div className={classes.errorMessage}>
          <p>Hubo un error al intentar buscar la información.</p>
          <p>
            Por favor, revisa que tu token y tus series estén en el formato
            correcto.
          </p>
        </div>
      )}
      {isLoading && !isError ? (
        <p className={classes.loadingMessage}>
          Espera un momento en lo que buscamos la información por favor
        </p>
      ) : (
        <SeriesContainer>
          {seriesData.map((data) => (
            <ChartLine key={data?.idSerie} data={data} />
          ))}
        </SeriesContainer>
      )}
    </main>
  )
}
