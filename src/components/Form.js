import { useForm } from 'react-hook-form'

export const Form = () => {
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

  const onSubmit = (data) => console.log(data)

  console.log(watch()) // Watch globally the input object.

  const token = watch('token') //Watch specific input values.

  const series = watch('series') //Watch specific input values.

  console.log('This is my token', token)

  console.log('These are my series', series)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form
      className="border flex flex-col gap-4 max-w-4xl p-4  rounded-lg m-4 shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}
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
      />
      <p className="text-red-400">{errors.token?.message}</p>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      {/* include validation with required or other standard HTML validation rules */}
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
      />
      <p className="text-red-400">{errors.series?.message}</p>
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input
        className="px-3 py-1 w-24 cursor-pointer mt-4 border-sky-700 text-white bg-sky-700 font-semibold rounded-md"
        type="submit"
        value={'Fetch'}
      />
    </form>
  )
}
