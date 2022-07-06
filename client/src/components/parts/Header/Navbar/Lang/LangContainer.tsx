import React, { useRef, useState, useCallback, useEffect, FC } from "react";
import { connect } from "react-redux";
import {RootState} from '../../../../../store/store'



import {IconSvg, Img} from "../../../../general/Images";
import { Lang } from "./Lang";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../data/redux/store";
// import { setLanguage } from '../../data/redux/slices/languageSlice';
// import { translation } from "../../data/locales/languages/languages";

import {TLangState} from '../../../../../store/slice/lenguageSlice'
type TLang = {
   lang: string
}


const LangContainer = React.memo((props:TLangState) => {

   // const lang = useSelector((state: RootState) => state.languages.language)
// console.log(props.lang);

   
   return (<Lang {...props}/>);
})

const mapStateToProps = (state:RootState) =>{
   return{
      lang: state.language.lang
   }
}

export default connect(mapStateToProps)(LangContainer)