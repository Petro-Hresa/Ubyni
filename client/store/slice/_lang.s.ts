import { createSlice } from "@reduxjs/toolkit";
import { initialize } from "redux-form";
const en = require('../locales/langs/en.json');
const ua = require('../locales/langs/ua.json');

// function translation 

export type TLang = {
   lang: any,
   setLang: (lang: string) => void,
   setLocalLang: (lang: string) => void,
};




export const translation = (keyword: string, lang: string) => {
   let languageData: { [keyword: string]: string } = {}
   if (lang === 'en') languageData = en
   else if (lang === 'ua') languageData = ua
   return languageData[keyword]
}

const setLocal = (lang: string) => {
   localStorage.setItem('language', lang)
   return {
      type: "language",
      payload: lang
   }
 }


// debugger
// console.log(typeof getFromStorage('language'));


// const actualLocalLang = getFromStorage('language')
 


// const getFromStorage = (key: string): any => {
//    if (typeof localStorage !== 'undefined') {
//       return getFromStorage('language')
//    }
// }

const getFromStorage = (key:string) => {
   if (typeof window !== 'undefined') {
      

      return localStorage.getItem(key);
   }
}
// console.log( getFromStorage('language'));



const initialState = {
    lang: 'ua'
      
} as TLang



// localLang ? localLang :
const Lang = createSlice({
   name: 'lang',
   initialState,
   reducers: {
      setLang: (state, { payload }) => {

      },

   }
});


export const { setLang} = Lang.actions;
export default Lang.reducer;




