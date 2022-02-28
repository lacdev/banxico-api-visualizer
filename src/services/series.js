import axios from 'axios'

export const getSeries = async (series = '', token = '') => {
  const url = `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${series}?token=${token}&mediaType=json`

  const getSeries = await axios.get(url, {
    headers: {
      Authorization:
        '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
    },
  })

  const seriesData = getSeries.data

  return seriesData
}

// const TUKAN_TOKEN = process.env.TUKAN_TOKEN
// const BASE_URL = process.env.BASE_URL

//https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/

// const response = await fetch(url, {
//   headers: {
//     Authorization:
//       '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => data)
// return response

// const response = await axios.get({
//   // url: `${BASE_URL}${series}?token=${token}&mediaType=json`,
//   url: `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${series}?token=${token}&mediaType=json`,

//   headers: {
//     // Authorization: `${TUKAN_TOKEN}`,
//     Authorization:
//       '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
//   },
// })
