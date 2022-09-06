import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import Language from './slice/_lang.s';
import Register from './slice/_register.s';





// import Registration from './slice/Registration.s';
// import UsersReducer from './slice/usersSlice';
// import LoginReducer from './slice/loginSlice';


 const store = configureStore({
   reducer:{
      lang: Language,
      register: Register,
      // navbar: Navbar
      // registr: Registration,
      // login: LoginReducer,
      // users: UsersReducer,
      form: formReducer
   }
});


export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;