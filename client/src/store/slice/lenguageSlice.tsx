import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { useSelector } from "react-redux";

// const lang = useSelector((state: RootState) => state.language.lang)

const setLocalLanguage = (lang:string) => {
   localStorage.setItem('language', lang)
   return{
      type: "language",
      payload: lang
   }
}

const localLang = localStorage.getItem('language');

export type TLangState = {
   lang: string
}

const initialState:TLangState = {
   lang: localLang || 'ua'
}


let lang:string = initialState.lang


console.log("langAfter",lang);

const LanguageSlice = createSlice({
   name: 'lang',
   initialState,
   reducers:{
      setLang:(state, action)=>{
         state.lang = action.payload
         setLocalLanguage(action.payload)
         // changeLang(action.payload) 
       
      },
   }
})
// console.log("arr",changeLang);

export let {setLang} = LanguageSlice.actions
export default LanguageSlice.reducer


const en = require('../locales/languages/en.json');
const ua = require('../locales/languages/ua.json');
// function changeLang(lang = action:string){
//    console.log("insid",action);
//    return lang = action
// }

export const translation = (keyword:string) =>{
   let languageData : {[keyword:string]:string} = {}
   if( lang === 'en') languageData = en
   else if(lang === 'ua')languageData = ua
   return languageData[keyword]
}