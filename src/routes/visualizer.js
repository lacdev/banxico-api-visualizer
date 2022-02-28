import { getSeries } from 'services/series'
import { useState, useEffect } from 'react'
import { Form } from 'components/Form'
import { SeriesContainer } from 'components/SeriesContainer'
import { set } from 'date-fns'
// import { SeriesGraph } from 'components/SeriesGraph'

export default function Visualizer() {
  const [banxicoToken, setBanxicoToken] = useState('')
  const [seriesToFetch, setSeriesToFetch] = useState('')
  const [seriesData, setSeriesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(true)

  console.log('token and series', banxicoToken, seriesToFetch)

  const classses = {
    errorMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4',
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setIsLoading(true)
      const data = await getSeries(seriesToFetch, banxicoToken)
      setIsLoading(false)

      setSeriesData(data.bmx.series)
      console.log('seriesdata updated?', seriesData)
    } catch (e) {
      setIsError(true)
    }
  }

  const handleTokenChange = (event) => setBanxicoToken(event.target.value)

  const handleSeriesChange = (event) => setSeriesToFetch(event.target.value)

  if (!isLoading && isError)
    return (
      <>
        <h2 className="text-4xl">Visualizer</h2>
        <Form
          onSubmit={handleSubmit}
          onTokenChange={handleTokenChange}
          onSeriesChange={handleSeriesChange}
        />

        <div className={classses.errorMessage}>
          <p>Hubo un error al intentar buscar la información.</p>
          <p>
            Por favor, revisa que tu token y tus series estén en el formato
            correcto.
          </p>
        </div>
      </>
    )

  return (
    <main className="pt-1">
      <h2 className="text-4xl">Visualizer</h2>
      <Form
        onSubmit={handleSubmit}
        onTokenChange={handleTokenChange}
        onSeriesChange={handleSeriesChange}
      />
      <SeriesContainer>
        {isLoading
          ? 'Un momento por favor'
          : seriesData.map((data) => (
              <div key={data.idSerie}>
                <h1>{data.titulo}</h1>
                <div>{data.datos.length}</div>
              </div>
            ))}
      </SeriesContainer>
    </main>
  )
}

// useEffect(() => {
//   const fetchSeries = async () => {
//     try {
//       setIsLoading(true)
//       const response = await getSeries(seriesToFetch, banxicoToken)
//       setSeriesData(response.data.bmx.series)
//       setIsLoading(false)
//     } catch (error) {
//       console.log(error)
//       setIsError(true)
//     }
//   }
//   fetchSeries()
// }, [])
