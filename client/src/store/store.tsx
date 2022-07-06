import { configureStore } from '@reduxjs/toolkit'
import LanguageReducer from '../store/slice/lenguageSlice'

export const store = configureStore({
   reducer:{
      language: LanguageReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch