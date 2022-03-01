import { Link } from 'react-router-dom'

export default function Started() {
  return (
    <main className="p-4">
      <h2 className="text-5xl font-semibold">How to use this application:</h2>
      <div className="mt-8">
        <p className="text-4xl my-8">
          A banxico token is required in order to fetch data from the public
          API.
        </p>
        <p className="text-4xl my-8">
          You can get a Banxico token for free by clicking
          <a
            className="text-4xl font-bold text-sky-800 ml-4"
            target="_blank"
            href="https://www.banxico.org.mx/SieAPIRest/service/v1/"
            rel="noreferrer"
          >
            Here
          </a>
        </p>

        <p className="text-4xl my-8">
          You can learn more about time series and the data you can obtain with
          each one of them by clicking
          <a
            className="text-4xl font-bold text-sky-800 ml-4"
            target="_blank"
            href="https://www.banxico.org.mx/SieAPIRest/service/v1/doc/catalogoSeries"
            rel="noreferrer"
          >
            Here
          </a>
        </p>

        <p className="text-4xl my-8">
          Start using the data visualizer by clicking
          <Link
            className="text-4xl font-bold text-sky-800 ml-4"
            to="/visualizer"
          >
            Here
          </Link>
        </p>
        <p className="text-xl text-sky-800">
          Note: remember you need to separate your time series with a comma and
          no spaces, otherwise an error will be shown instead of the data you
          need.
        </p>
      </div>
    </main>
  )
}
