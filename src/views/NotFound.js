import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main
      className={clsx(
        `text-4xl flex flex-col items-center m-auto font-extrabold text-transparent
        bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4`
      )}
    >
      <p className={clsx('text-9xl mb-8')}>404</p>
      <p className={clsx('text-3xl mb-8')}>Oops! Nothing to be found here.</p>
      <Link
        className={clsx(`text-4xl flex flex-col items-center m-auto font-extrabold text-transparent
        bg-clip-text bg-gradient-to-br from-purple-300 to-purple-700 mt-4`)}
        to="/"
      >
        Return to Home Page
      </Link>
    </main>
  )
}
