import { createSlice } from "@reduxjs/toolkit";
const en = require('../locales/languages/en.json');
const ua = require('../locales/languages/ua.json');

// function translation 
export const translation = (keyword:string, lang:string) =>{
   let languageData : {[keyword:string]:string} = {}
   if( lang === 'en') languageData = en
   else if(lang === 'ua')languageData = ua
   return languageData[keyword]
}

const setLocalLanguage = (lang:string) => {
   localStorage.setItem('language', lang)
   return{
      type: "language",
      payload: lang
   }
}

export type TLangState = {
   lang: string
}

const LanguageSlice = createSlice({
   name: 'lang',
   initialState: { lang: localStorage.getItem('language') || 'ua' }as TLangState,
   reducers:{
      setLang:(state, action)=>{
         state.lang = action.payload
         setLocalLanguage(action.payload)
      }
   }
})


export let {setLang} = LanguageSlice.actions
export default LanguageSlice.reducer




