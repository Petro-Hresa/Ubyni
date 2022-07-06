import { createSlice } from "@reduxjs/toolkit";



console.log(window.localStorage.setItem('language', "lang"));


export type TLangState = {
   lang: string
}

const LanguageSlice = createSlice({
   name: 'lang',
   initialState:{lang:'en' || 'ua'} as TLangState,
   reducers:{
      
   }
})

export default LanguageSlice.reducer