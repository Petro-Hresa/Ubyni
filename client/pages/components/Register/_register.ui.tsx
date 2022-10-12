import React, {FC} from 'react'
// import { Link } from 'react-router-dom'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'

import { useSelector } from 'react-redux'
// import { RootState } from '../../store/store'
import { TRegister } from './_register.se'
//components


export type TRegisterForm = {
  fullName: string,
  email: string,
  login: string,
  password: string,
  confirmPassword: string
}


const RegisterForm:FC<InjectedFormProps <TRegisterForm>> = (props)=>{

  
  return(
      <form method='POST' action='/api/register' onSubmit={props.handleSubmit} className='p-20 text-primary font-semibold'>

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

      <button type="submit" name='Enter' className='bg-primary text-white inline-block py-2 px-30 rounded-[5px]'/>

      <div className="mt-4">
          {/* You have account <Link to="/login" className='text-primary font-semibold'>Log in</Link> */}
      </div>
    </form>
  )
}


const RegisterReduxForm =  reduxForm<TRegisterForm>({form: 'register'})(RegisterForm)


const RegisterUi = (props:TRegister) => {

  const onSubmit = (formData:TRegisterForm)=>{props.postUser(formData)}

  return (
    <div className="border fixed top-[84px] left-0 h-[calc(100%-84px)] w-full flex justify-center items-center">  
      <RegisterReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
export default RegisterUi;

