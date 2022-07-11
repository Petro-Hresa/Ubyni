import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { setRegistration, postUser } from '../../../../../../store/slice/registrationSlice'


//components
import Registration from './Registration'

export type TRegistrationContainer = {
    setRegistration: (dataForm:{})=>void,
    postUser: ()=> any
}
// 

const RegistrationContainer = (props:TRegistrationContainer) => {
  // console.log(props);
  useEffect(()=>{
    props.postUser()
  })
  
  return (<Registration {...props} />)
}

const mapStateToProps =(state:RootState)=> {

   return{

   }

}

export default connect(mapStateToProps, {setRegistration,postUser})(RegistrationContainer)
