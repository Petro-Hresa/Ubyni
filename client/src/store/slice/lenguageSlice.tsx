import { createSlice } from "@reduxjs/toolkit";

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

const LanguageSlice = createSlice({
   name: 'lang',
   initialState,
   reducers:{
      setLang:(state, action)=>{
         state.lang = action.payload
         setLocalLanguage(action.payload)
      },
   }
})


export let {setLang} = LanguageSlice.actions
export default LanguageSlice.reducer


const en = require('../locales/languages/en.json');
const ua = require('../locales/languages/ua.json');
export const translation = (keyword:string) =>{
   let languageData : {[keyword:string]:string} = {}
   if(initialState.lang === 'en') languageData = en
   else if(initialState.lang === 'ua')languageData = ua
   return languageData[keyword]
}