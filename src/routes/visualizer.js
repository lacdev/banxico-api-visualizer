import { getSeries } from 'services/series'
import { useState } from 'react'
import { Form } from 'components/Form'
import { SeriesContainer } from 'components/SeriesContainer'
// import { SeriesGraph } from 'components/SeriesGraph'

export default function Visualizer() {
  const [banxicoToken, setBanxicoToken] = useState('')
  const [seriesToFetch, setSeriesToFetch] = useState('')
  const [seriesData, setSeriesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  console.log('token and series', banxicoToken, seriesToFetch)

  const classes = {
    errorMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4',
    loadingMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4',
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setIsLoading(true)
      const data = await getSeries(seriesToFetch, banxicoToken)
      setSeriesData(data.bmx.series)
      setIsLoading(false)
    } catch (e) {
      setIsError(true)
    }
  }

  console.log('Series updated?', seriesData)

  const handleTokenChange = (event) => setBanxicoToken(event.target.value)

  const handleSeriesChange = (event) => setSeriesToFetch(event.target.value)

  if (!isLoading && isError) {
    return (
      <main className="pt-1">
        <Form
          onSubmit={handleSubmit}
          onTokenChange={handleTokenChange}
          onSeriesChange={handleSeriesChange}
        />

        <div className={classes.errorMessage}>
          <p>Hubo un error al intentar buscar la información.</p>
          <p>
            Por favor, revisa que tu token y tus series estén en el formato
            correcto.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-1">
      <Form
        onSubmit={handleSubmit}
        onTokenChange={handleTokenChange}
        onSeriesChange={handleSeriesChange}
      />
      <SeriesContainer>
        {isLoading ? (
          <p className={classes.loadingMessage}>
            Espera un momento en lo que buscamos la información por favor
          </p>
        ) : (
          seriesData.map((data) => (
            <div key={data.idSerie}>
              <h1>{data.titulo}</h1>
              <div>{data.datos.length}</div>
            </div>
          ))
        )}
      </SeriesContainer>
    </main>
  )
}
