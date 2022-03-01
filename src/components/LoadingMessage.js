export const LoadingMessage = () => {
  const classes = {
    loadingMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 m-4',
  }
  return (
    <div className={classes.loadingMessage}>
      <p>Espera un momento en lo que buscamos la información por favor</p>
    </div>
  )
}
