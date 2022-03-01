import { Link } from 'react-router-dom'

export default function Started() {
  const classes = {
    title: 'text-5xl font-semibold',
    paragraph: 'text-3xl my-8',
    link: 'text-3xl font-bold text-sky-800 ml-4',
    note: 'text-xl text-sky-800',
    paragraphContainer: 'mt-8',
    mainContainer: 'p-4',
  }
  return (
    <main className={classes.mainContainer}>
      <h2 className={classes.title}>How to use this application:</h2>
      <div className={classes.paragraphContainer}>
        <p className={classes.paragraph}>
          A banxico token is required in order to fetch data from the public
          API.
        </p>
        <p className={classes.paragraph}>
          You can get a Banxico token for free by clicking
          <a
            className={classes.link}
            target="_blank"
            href="https://www.banxico.org.mx/SieAPIRest/service/v1/"
            rel="noreferrer"
          >
            Here
          </a>
        </p>

        <p className={classes.paragraph}>
          You can learn more about time series and the data you can obtain with
          each one of them by clicking
          <a
            className={classes.link}
            target="_blank"
            href="https://www.banxico.org.mx/SieAPIRest/service/v1/doc/catalogoSeries"
            rel="noreferrer"
          >
            Here
          </a>
        </p>

        <p className={classes.paragraph}>
          Start using the data visualizer by clicking
          <Link className={classes.link} to="/visualizer">
            Here
          </Link>
        </p>

        <p className={classes.note}>
          Note: remember to separate your time series with a comma and no spaces
          in between, otherwise an error will be shown instead of the data you
          need.
        </p>
      </div>
    </main>
  )
}
