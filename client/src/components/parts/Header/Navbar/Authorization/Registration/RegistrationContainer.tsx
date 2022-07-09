import React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { setRegistration } from '../../../../../../store/slice/registrationSlice'

//components
import Registration from './Registration'

type TRegistrationContainer = {

}

const RegistrationContainer = (props:TRegistrationContainer) => {
   
  return (<Registration/>)
}

const mapStateToProps =(state:RootState)=> {

   return{

   }

}

export default connect(mapStateToProps)(RegistrationContainer)
