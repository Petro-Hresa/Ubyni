import React, { useRef, useState, useCallback, useEffect, FC } from "react";
import { connect } from "react-redux";
import {TRootState} from '../../store'

import LangUi from "./Lang.ui";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../data/redux/store";
// import { setLanguage } from '../../data/redux/slices/languageSlice';
// import { translation } from "../../data/locales/languages/languages";
import { setLang } from "../../store/slice/lenguage.s";
// import {TLangState} from '../../../../../store/slice/lenguageSlice';

// console.log(setLang);


export type TLang = {
   lang: string,
   setLang: (value:string)=>void
}

// Lang Side Effects
const Lang = (props:TLang) => {

   // const lang = useSelector((state: RootState) => state.languages.language)
   // console.log(props.setLang);

   
   return (<LangUi {...props}/>);
}

const mapStateToProps = (state:TRootState) =>{
   return{
      lang: state.lang.lang
   }
}

export default connect(mapStateToProps, {setLang})(Lang)