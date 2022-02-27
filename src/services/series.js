import axios from 'axios'

const TUKAN_TOKEN = process.env.TUKAN_TOKEN
const BASE_URL = process.env.BASE_URL

export const getSeries = async (series = '', token = '') => {
  try {
    const response = await axios.get({
      url: `${BASE_URL}${series}?token=${token}&mediaType=json`,
      headers: {
        Authorization: `${TUKAN_TOKEN}`,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}
