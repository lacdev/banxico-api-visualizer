import axios from 'axios'

export const getSeries = async (series = '', token = '') => {
  const url = `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${series}?token=${token}&mediaType=json`

  const getSeries = await axios.get(url, {
    headers: {
      Authorization:
        '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
    },
  })

  const seriesData = getSeries?.data

  return seriesData
}
