import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { postUser } from '../../store/slice/registrationSlice'


//components
import Registration from './Registration'

export type TRegistrationContainer = {
    postUser: (data:{})=> any,
    user: any
}
 

const RegistrationContainer = (props:TRegistrationContainer) => {

  useEffect(()=>{
   
  })
  
  return (<Registration {...props} />)
}

const mapStateToProps =(state:RootState)=> {

   return{
    user: state.users.users
   }

}

export default connect(mapStateToProps, {postUser})(RegistrationContainer)
