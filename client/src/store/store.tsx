import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form';
import LanguageReducer from '../store/slice/lenguageSlice'
import RegistrationReducer from '../store/slice/registrationSlice'

export const store = configureStore({
   reducer:{
      language: LanguageReducer,
      registration: RegistrationReducer,
      form: formReducer
   }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch