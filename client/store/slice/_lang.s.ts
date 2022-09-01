import { createSlice } from "@reduxjs/toolkit"; 
const en = require('../locales/langs/en.json');
const ua = require('../locales/langs/ua.json');

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

// const getFromStorage = (key:string) => {
//    if(typeof localStorage !== 'undefined'){
//        return getFromStorage('language')
//    }
// }

// const localLang =  localStorage.getItem('language');
// console.log(localStorage.getItem('language'));

export type TLang = {
   lang: string,
   setLang: (lang:string)=>void,
};

const Lang = createSlice({
   name: 'lang',
   initialState: { lang:'ua' }as TLang,
   reducers:{
      setLang:(state, {payload})=>{
         setLocalLanguage(payload)
         return{ 
            ...state,
            lang: payload
         }
      },

   }
});


export const {setLang} = Lang.actions;
export default Lang.reducer;




