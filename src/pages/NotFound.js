export default function NotFound() {
  const classes = {
    notFoundMessage:
      'text-4xl flex flex-col items-center m-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-700 mt-4',
    numberMessage: 'text-9xl mb-8',
    textMessage: 'text-5xl mb-8',
  }
  return (
    <main className={classes.notFoundMessage}>
      <p className={classes.numberMessage}>404</p>
      <p className={classes.textMessage}>Oop You might be lost! </p>
      <p className={classes.textMessage}>Nothing to be found here</p>
    </main>
  )
}
