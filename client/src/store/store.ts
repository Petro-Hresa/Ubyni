import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form';
import LanguageReducer from './slice/lenguageSlice'
import RegistrationReducer from './slice/registrationSlice'
import UsersReducer from './slice/usersSlice'


export const store = configureStore({
   reducer:{
      language: LanguageReducer,
      registration: RegistrationReducer,
      users: UsersReducer,
      form: formReducer
   }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch