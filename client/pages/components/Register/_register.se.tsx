import React from 'react'
import { connect } from 'react-redux';
import RegisterUi from './_register.ui';

const Register = (props:TRegisterUi) => {
  return <RegisterUi {...props}/>
}

export default connect()(Register);
