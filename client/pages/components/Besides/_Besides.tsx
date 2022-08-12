import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TRootState } from '../../store/store';
import BesidesUi from './_Besides.ui';
import { TBesides } from '../../store/slice/Besides.s';
import { getStatus } from '../../store/slice/Besides.s';


const Besides = (props:TBesides) => {
  console.log(props.isOpen)
  return (<BesidesUi {...props}/>)
};

const mapStateToProps = (state: TRootState)=>{

  
  return {
    isOpen: state.besides.isOpen
  }
}


export default connect(mapStateToProps,{getStatus})(Besides)
