export const API_CONSTANTS = {
  getSeriesApiUrl: (series, token) =>
    `${process.env.REACT_APP_BACKEND_API}/series/${series}?token=${token}&mediaType=json`,
}
