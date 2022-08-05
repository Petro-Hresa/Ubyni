import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { postUser } from '../../store/slice/RegistrationS'


//components
import Registration from './Registration'

export type TRegistrationC = {
    postUser: (data:{})=> any,
    user: any
}
 

const RegistrationC = (props:TRegistrationC) => {

  useEffect(()=>{
   
  })
  
  return (<Registration {...props} />)
}

const mapStateToProps =(state:RootState)=> {

   return{
      user: state.users.users
   }

}

export default connect(mapStateToProps, {postUser})(RegistrationC)
