import clsx from 'clsx'

export const LoadingMessage = () => {
  return (
    <div
      className={clsx(
        'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 m-4'
      )}
    >
      <p>We are fetching the information. Please wait a moment.</p>
    </div>
  )
}
