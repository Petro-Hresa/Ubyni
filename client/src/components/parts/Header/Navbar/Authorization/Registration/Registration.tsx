import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../store/store'
import { TRegistrationContainer } from './RegistrationContainer'
//components
import { Button } from '../../../../../general/Button'

export type TRegistrationForm = {
  fullName: string,
  email: string,
  login: string,
  password: string,
  confirmPassword: string
}


const RegistrationForm:FC<InjectedFormProps <TRegistrationForm>> = (props)=>{

  
  return(
      <form method='POST' action='/api/registration' onSubmit={props.handleSubmit} className='p-20 text-primary font-semibold'>

      <label htmlFor="" className=''>
        Full Name
        <Field component={'input'} type="text" name='fullName' placeholder='Enter full name' className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
      </label>

      <label htmlFor="">
        Email
        <Field component={'input'} type="email" name='email' placeholder='Enter last email' required className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
      </label>

      <label htmlFor="">
        Login
        <Field component={'input'} type="text" name='login' placeholder='Enter login' required  className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
      </label>

      <label htmlFor="">
        Password
        <Field component={'input'} type="password" name='password' placeholder='Enter password' required className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4' />
      </label>

      <label htmlFor="">
        Confirm password
        <Field component={'input'} type="password" name='confirmPassword' placeholder='Enter confirm password' required  className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4' />
      </label>

      <Button type="submit" name='Enter' className='bg-primary text-white inline-block py-2 px-30 rounded-[5px]'/>

      <div className="mt-4">
          You have account <Link to="/login" className='text-primary font-semibold'>Log in</Link>
      </div>
    </form>
  )
}


const RegistrationReduxForm =  reduxForm({
    form: 'registration'
})(RegistrationForm)


const Registration = (props:TRegistrationContainer) => {

    const onSubmit = (formData:TRegistrationForm)=>{
      props.setRegistration(formData)
    }

  return (
   <div className="container">  
    <RegistrationReduxForm onSubmit={onSubmit}/>
  </div>
  )
}
export default Registration
