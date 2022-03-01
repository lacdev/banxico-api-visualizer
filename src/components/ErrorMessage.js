export const ErrorMessage = () => {
  const classes = {
    errorMessage:
      'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 m-4',
  }

  return (
    <div className={classes.errorMessage}>
      <p>Hubo un error al intentar buscar la información.</p>
      <p>
        Por favor, revisa que tu token y tus series estén en el formato
        correcto.
      </p>
    </div>
  )
}
