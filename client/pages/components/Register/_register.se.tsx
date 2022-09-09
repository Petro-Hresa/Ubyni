import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { TRootState } from '../../../store/store';
import { postUser } from '../../../store/slice/_register.s';


//components
import RegistrUi from './_register.ui';

export type TRegister = {
    postUser: (data:{})=> any,
    user: any
}
 

const Register = (props:TRegister) => {

  useEffect(()=>{
   
  })
  
  return (<RegistrUi {...props} />)
}

const mapStateToProps =(state:TRootState)=> {

   return{
    user: state.register
   }

}

export default connect(mapStateToProps, {postUser})(Register)

