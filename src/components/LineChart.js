import * as d3 from 'd3'
import { useEffect } from 'react'

// import { VegaLite } from 'react-vega'

// const barData = {
//   "values": [
//     {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
//     {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
//     {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
//   ]
// };

export const LineChart = ({ series, props }) => {
  const createGraph = async () => {
    let parseTime = d3.timeParse('%Y-%m-%d')
    series.forEach((data) => {
      data.date = parseTime(data.date)
      data.value = +data.value
    })
    console.log(data)
  }

  useEffect(() => {
    createGraph()
  }, [createGraph])
  const { data, width, height } = props
  // const spec = {
  //   description: 'A simple bar chart with embedded data.',
  //   mark: 'bar',
  //   encoding: {
  //     x: { field: `${series.dato?.fecha}`, type: 'ordinal' },
  //     y: { field: `${series.dato?.dato}`, type: 'quantitative' },
  //   },
  // }

  return (
    <div>
      {/* <VegaLite spec={spec} data={series} /> */}

      {/* <h1>{series?.idSerie}</h1>
      <p>{series?.titulo}</p>
      <div>
        <p>{series.dato?.fecha}</p>
        <p>{series.dato?.dato}</p>
      </div> */}
    </div>
  )
}
