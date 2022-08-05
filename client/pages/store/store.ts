import { configureStore } from '@reduxjs/toolkit';
// import { reducer as formReducer } from 'redux-form';
import LanguageR from './slice/lenguageS';
import RegistrationR from './slice/RegistrationS';
// import UsersReducer from './slice/usersSlice';
// import LoginReducer from './slice/loginSlice';


export const store = configureStore({
   reducer:{
      language: LanguageR,
      registration: RegistrationR,
      // login: LoginReducer,
      // users: UsersReducer,
      // form: formReducer
   }
});


export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;