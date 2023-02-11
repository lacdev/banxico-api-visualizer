import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const BarChart = React.memo(function BarChart({ data }) {
  const dataConfig = {
    labels: data?.datos?.map((dato) => dato?.fecha),
    datasets: [
      {
        label: data?.titulo,
        backgroundColor: 'rgb(3,105,161)',
        borderColor: 'rgb(3,105,161)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(40,149,250)',
        hoverBorderColor: 'rgb(40,149,250)',
        data: data?.datos.map((dato) => dato?.dato),
      },
    ],
  }

  return (
    <div className="m-4">
      <Bar
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

export default BarChart
