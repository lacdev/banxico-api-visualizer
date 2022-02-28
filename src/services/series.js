import axios from 'axios'

const TUKAN_TOKEN = process.env.TUKAN_TOKEN
const BASE_URL = process.env.BASE_URL

export const getSeries = async (series = '', token = '') => {
  const url = `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${series}?token=${token}&mediaType=json`

  const response = await fetch(url, {
    headers: {
      Authorization:
        '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
  // .then((data) => console.log('my data?', data))

  // const response = await axios.get({
  //   // url: `${BASE_URL}${series}?token=${token}&mediaType=json`,
  //   url: `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${series}?token=${token}&mediaType=json`,

  //   headers: {
  //     // Authorization: `${TUKAN_TOKEN}`,
  //     Authorization:
  //       '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
  //   },
  // })
  console.log(response)
  return response
}
