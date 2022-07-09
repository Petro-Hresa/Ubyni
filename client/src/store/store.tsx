import { configureStore } from '@reduxjs/toolkit'
import LanguageReducer from '../store/slice/lenguageSlice'
import RegistrationReducer from '../store/slice/registrationSlice'

export const store = configureStore({
   reducer:{
      language: LanguageReducer,
      registration: RegistrationReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch