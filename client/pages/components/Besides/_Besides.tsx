import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TRootState } from '../../../store/store';
import BesidesUi from './_besidesUi';
import { TBesides } from '../../../store/slice/BesidesS';
import { getStatus, getEvent } from '../../../store/slice/BesidesS';


const Besides = (props:TBesides) => {
  return (<BesidesUi {...props}/>)
};

const mapStateToProps = (state: TRootState)=>{
  return {
    isOpen: state.besides.isOpen
  }
}


export default connect(mapStateToProps,{getStatus})(Besides)
