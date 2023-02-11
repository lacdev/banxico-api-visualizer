import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function Started() {
  return (
    <main className={clsx('p-4')}>
      <h2 className={clsx('text-3xl font-semibold text-sky-800')}>
        How to use this application:
      </h2>
      <div className={clsx('mt-8')}>
        <p className={clsx('text-2xl my-8 text-gray-600')}>
          A Banxico token is required in order to fetch data from the Banxico
          public API.
        </p>
        <p className={clsx('text-2xl my-8 text-gray-600')}>
          You can get a temporal Banxico token for free by clicking
          <a
            className={clsx('text-2xl font-bold text-sky-800 ml-4')}
            target="_blank"
            href="https://www.banxico.org.mx/SieAPIRest/service/v1/"
            rel="noreferrer"
          >
            Here
          </a>
        </p>

        <p className={clsx('text-2xl my-8 text-gray-600')}>
          You can learn more about time series and the data you can obtain with
          each one of them by clicking
          <a
            className={clsx('text-2xl font-bold text-sky-800 ml-4')}
            target="_blank"
            href="https://www.banxico.org.mx/SieAPIRest/service/v1/doc/catalogoSeries"
            rel="noreferrer"
          >
            Here
          </a>
        </p>

        <p className={clsx('text-2xl my-8 text-gray-600')}>
          Start using the data visualizer by clicking
          <Link
            className={clsx('text-2xl font-bold text-sky-800 ml-4')}
            to="/visualizer"
          >
            Here
          </Link>
        </p>

        <p className={clsx('text-xl font-semibold text-sky-800')}>
          Note: remember to separate your time series with a comma and no spaces
          in between, otherwise an error will be shown instead of the data you
          need.
        </p>
      </div>
    </main>
  )
}
