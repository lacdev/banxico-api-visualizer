import clsx from 'clsx'

export const ErrorMessage = () => {
  return (
    <div
      className={clsx(
        'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 m-4'
      )}
    >
      <p>
        There was an error trying to fetch the information. <br></br>
        Please check that your Banxico token and your series are in the correct
        format.
      </p>
    </div>
  )
}
