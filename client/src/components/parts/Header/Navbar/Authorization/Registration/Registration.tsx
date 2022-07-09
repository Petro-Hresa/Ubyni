import React from 'react'
import { Link } from 'react-router-dom'

//components
import { Button } from '../../../../../general/Button'

const Registration = () => {
  return (
   <div className="container">
   <form method='POST' action='/api/user' className='p-20 text-primary font-semibold'>

     <label htmlFor="" className=''>
       Full Name
       <input type="text" name='full name' placeholder='Enter full name' className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
     </label>

     <label htmlFor="">
       Email
       <input type="email" name='email' placeholder='Enter last email' required className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
     </label>

     <label htmlFor="">
       Login
       <input type="text" name='login' placeholder='Enter login' required  className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4'/>
     </label>

     <label htmlFor="">
       Password
       <input type="password" name='pass' placeholder='Enter password' required className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4' />
     </label>

     <label htmlFor="">
       Confirm password
       <input type="password" name='confirm pass' placeholder='Enter confirm password' required  className='block border-2 border-secondary py-2 px-30 rounded-[5px] mr-20 mb-4' />
     </label>

     <Button type="submit" name='Enter' className='bg-primary text-white inline-block py-2 px-30 rounded-[5px]'/>

      <div className="mt-4">
          You have account <Link to="/login" className='text-primary font-semibold'>Log in</Link>
      </div>
   </form>
 </div>
  )
}

export default Registration
