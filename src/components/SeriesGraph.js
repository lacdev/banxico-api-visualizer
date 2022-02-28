// import { VegaLite } from 'react-vega'

export const SeriesGraph = ({ series }) => {
  return (
    <div>
      <h1>{series?.idSerie}</h1>
      <p>{series?.titulo}</p>
      <div>
        <p>{series.dato?.fecha}</p>
        <p>{series.dato?.dato}</p>
      </div>
    </div>
  )
}
