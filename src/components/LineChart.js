import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const LineChart = React.memo(function LineChart({ data }) {
  const dataConfig = {
    labels: data?.datos?.map((dato) => dato?.fecha),
    datasets: [
      {
        label: data?.titulo,
        backgroundColor: 'rgb(3,105,161)',
        borderColor: 'rgb(3,105,161)',
        pointRadius: 0,
        hoverBackgroundColor: 'rgb(40,149,250)',
        hoverBorderColor: 'rgb(40,149,250)',
        data: data?.datos.map((dato) => dato?.dato),
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="m-4">
      <Line
        data={dataConfig}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          animation: false,
        }}
      />
    </div>
  )
})

export default LineChart
