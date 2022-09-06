import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TLang, setLang, setLocalLang } from '../../../store/slice/_lang.s';
import { TRootState } from '../../../store/store';
import LangUi from './_lang.ui';

// Lang Side Effects
const Lang = (props:TLang) => {
  return (<LangUi {...props} />)
}

const mapStateToProps = (state:TRootState)=>{

  useEffect(()=>{
    const setLocalLanguage = (lang:string) => {
      localStorage.setItem('language', lang)
      return{
         type: "language",
         payload: lang
      }
   }
  },[])

  return {
    lang: state.lang.lang
  }
}

export default connect(mapStateToProps, {setLang, setLocalLang})(Lang);
