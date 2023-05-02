import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const modalSchema = Yup.object().shape({
    zipcode: Yup.number()
      .required('Zip code is a required field')// optional
      .typeError('Please enter valid zip code.')// optional as well
    // .test('len', 'Please enter valid zip code.', val => val.toString().length === 5)
  })

const modalFormOptions = { resolver: yupResolver(modalSchema) }
const { register, setValue, formState: { errors, isSubmitting }, handleSubmit } = useForm(modalFormOptions);

const onSubmit = async formValue => {
    const { zipcode } = formValue
    zipCode.current = zipcode
    mutate(`${apicallUrl}/games/${zipCode.current}`)
}
  



