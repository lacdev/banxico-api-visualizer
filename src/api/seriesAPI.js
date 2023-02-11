import axios from 'axios'

import { API_CONSTANTS } from '../constants/api-constants'
import { AUTHORIZATION_HEADER } from '../constants/auth-header'

export const getSeries = async (series = '', token = '') => {
  return await axios.get(API_CONSTANTS.getSeriesApiUrl(series, token), {
    headers: {
      Authorization: AUTHORIZATION_HEADER,
    },
  })
}
