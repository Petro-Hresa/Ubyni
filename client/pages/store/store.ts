import { configureStore } from '@reduxjs/toolkit';
import Besides from './slice/Besides.s';

// import { reducer as formReducer } from 'redux-form';
import Language from './slice/Lang.s';



// import Registration from './slice/Registration.s';
// import UsersReducer from './slice/usersSlice';
// import LoginReducer from './slice/loginSlice';


export const store = configureStore({
   reducer:{
      lang: Language,
      besides: Besides
      // navbar: Navbar
      // registr: Registration,
      // login: LoginReducer,
      // users: UsersReducer,
      // form: formReducer
   }
});


export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;