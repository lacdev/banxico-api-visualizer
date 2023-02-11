import React from 'react'
import clsx from 'clsx'

const SeriesContainer = React.memo(function SeriesContainer({ children }) {
  return <div className={clsx('flex flex-col max-w-3/4')}>{children}</div>
})

export default SeriesContainer
