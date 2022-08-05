import React, { useRef, useState, useCallback, useEffect, FC } from "react";
import { connect } from "react-redux";
import {RootState} from '../../store/store'



import {IconSvg, Img} from "../Images/Images";
import { Lang } from "./Lang";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../data/redux/store";
// import { setLanguage } from '../../data/redux/slices/languageSlice';
// import { translation } from "../../data/locales/languages/languages";
import { setLang } from "../../store/slice/lenguageSlice";
// import {TLangState} from '../../../../../store/slice/lenguageSlice';

// console.log(setLang);


export type TLang = {
   lang: string,
   setLang: (value:string)=>void
}


const LangContainer = (props:TLang) => {

   // const lang = useSelector((state: RootState) => state.languages.language)
   // console.log(props.setLang);

   
   return (<Lang {...props}/>);
}

const mapStateToProps = (state:RootState) =>{
   return{
      lang: state.language.lang
   }
}

export default connect(mapStateToProps, {setLang})(LangContainer)