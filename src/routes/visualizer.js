import { getSeries } from 'services/series'
import { useState, useEffect } from 'react'
import { Form } from 'components/Form'

export default function Visualizer() {
  const [banxicoToken, setBanxicoToken] = useState('')
  const [seriesToFetch, setSeriesToFetch] = useState('')
  const [seriesData, setSeriesData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(true)

  const classses = {
    errorMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4',
  }

  //   useEffect(() => {
  //     const fetchSeries = async () => {
  //       try {
  //         setIsLoading(true)
  //         const response = await getSeries(seriesToFetch, banxicoToken)
  //         setSeriesData(response.data.bmx.series)
  //         setIsLoading(false)
  //       } catch (error) {
  //         console.log(error)
  //         setIsError(true)
  //       }
  //     }
  //     fetchSeries()
  //   }, [])

  //   const handleClick = (event) => {
  //     console.log(event.target)
  //   }

  /* <button
className="px-3 py-1 mt-4 mx-2 border-sky-700 text-white bg-sky-700 font-semibold rounded-md"
onClick={handleClick}
>
Fetch
</button> */

  if (!isLoading && isError)
    return (
      <>
        <Form />

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
      <h2>Visualizer</h2>
      {/* <button onClick={handleClick}>Fetch</button> */}
    </main>
  )
}
