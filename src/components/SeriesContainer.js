import clsx from 'clsx'

export const SeriesContainer = ({ children }) => {
  return <div className={clsx('flex flex-col max-w-3/4')}>{children}</div>
}
