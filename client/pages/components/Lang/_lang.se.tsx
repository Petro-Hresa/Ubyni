import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TLang, setLang } from '../../../store/slice/_lang.s';
import { TRootState } from '../../../store/store';
import LangUi from './_lang.ui';

type TlocalLang = {
  setLocal?: (lang:string)=> object
}

// Lang Side Effects
const Lang = (props:TLang & TlocalLang) => {

  const [localLang , setLang] = useState('ua')


  useEffect(()=>{
    console.log("P",props.lang);
    // setLocal(props.lang)
    // if(setLocal(props.lang))
  },[props.lang])
  

  return (<LangUi {...props} />)
}

const mapStateToProps = (state:TRootState)=>{

  return {
    lang: state.lang.lang,
  }
}

export default connect(mapStateToProps, {setLang})(Lang);
