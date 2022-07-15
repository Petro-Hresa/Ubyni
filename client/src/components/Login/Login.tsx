import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import {LoginType} from './LoginContainer'

type LogTypes  = {
  handleSubmit: (e:any)=>void,
}


const Login = (props: LoginType & LogTypes) => {
  return (
    // onSubmit={props.handleSubmit}
    <div className="container">
      <form className='p-20' onSubmit={props.handleSubmit} autoComplete="on">

        <label htmlFor="" className='text-primary font-semibold'>
          login
          <input type="text" value={props.login} onChange={(e)=> props.setLogin(e.target.value)}  className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
        </label>

        <label htmlFor=""  className='text-primary font-semibold'>
          Password
          <input type="password" value={props.password} onChange={(e)=> props.setPassword(e.target.value)} className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4' />
        </label>
    
        <label htmlFor="" className='text-primary font-semibold'>
          Remember me 
          <input type="checkbox" className='ml-2 mb-4'/>
        </label>
   
        <Button name="Login" type="submit" className='bg-primary text-white block py-2 px-30 rounded-[5px]'/>

        <div className="mt-4">
          If you don't have account make <Link to="/registration" className='text-primary font-semibold'>Registration</Link>
        </div>

      </form>
    </div>
  )
}

export default Login
