import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TLang, setLang } from '../../../store/slice/_lang.s';
import { TRootState } from '../../../store/store';
import LangUi from './_lang.ui';


// Lang Side Effects
const Lang = (props:TLang) => {


  return (<LangUi {...props} />)
}

const mapStateToProps = (state:TRootState)=>{

  return {
    lang: state.lang.lang,
  }
}

export default connect(mapStateToProps, {setLang})(Lang);
