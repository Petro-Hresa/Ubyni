import { createSlice } from "@reduxjs/toolkit";
import { initialize } from "redux-form";
const en = require('../locales/langs/en.json');
const ua = require('../locales/langs/ua.json');

// function translation 

export type TLang = {
   lang?: any,
   setLang: (lang: string) => void,

};


export const translation = (keyword: string, lang: string) => {
   let languageData: { [keyword: string]: string } = {}
   if (lang === 'en') languageData = en
   else if (lang === 'ua') languageData = ua
   return languageData[keyword]
}

const setToLocal = (lang: string) => {
   localStorage.setItem('language', lang)
   return {
      type: "language",
      payload: lang
   }
 }

const getFromLocal = (key:string) => {

   if (typeof window !== 'undefined') {
         return localStorage.getItem(key);
   }
}

const initialState = {
   lang: getFromLocal('language') || 'ua'
} as TLang

const Lang = createSlice({
   name: 'lang',
   initialState,
   reducers: {
      setLang: (state, { payload }) => {
         state.lang = payload
         setToLocal(state.lang)
      },
   }
});

export const {setLang} = Lang.actions;
export default Lang.reducer;  




