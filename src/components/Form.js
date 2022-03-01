import { useForm } from 'react-hook-form'

export const Form = ({ onTokenChange, onSeriesChange, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      token: '',
      series: '',
    },
  })

  const token = watch('token') //Watch specific input values.

  const series = watch('series') //Watch specific input values.

  return (
    <form
      onSubmit={handleSubmit}
      className="border flex flex-col gap-4 max-w-4xl p-4  rounded-lg m-4 shadow-lg"
    >
      <label
        className="block text-gray-700 text-md font-semibold mb-1"
        htmlFor="token"
      >
        Banxico Token
      </label>

      <input
        className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        {...register('token', {
          required: 'A valid banxico token is required.',
        })}
        placeholder="a6279286a585cb47fdf7b721211477..."
        onChange={onTokenChange}
      />
      <p className="text-red-400">{errors.token?.message}</p>

      <label
        className="block text-gray-700 text-md font-semibold mb-1"
        htmlFor="series"
      >
        Series
      </label>

      <input
        className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        {...register('series', {
          required:
            'Valid series for data fetching are required. Each serie needs to be comma separated. ',
        })}
        placeholder={`SF61745,SP68257`}
        onChange={onSeriesChange}
      />
      <p className="text-red-400">{errors.series?.message}</p>

      <input
        className="px-3 py-1 w-24 cursor-pointer  border-sky-700 text-white bg-sky-700 font-semibold rounded-md"
        type="submit"
        value={'Fetch'}
        onClick={onSubmit}
      />
    </form>
  )
}
