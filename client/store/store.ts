import { configureStore } from '@reduxjs/toolkit';
import Language from './slice/_lang.s';
import Burger from './slice/_burger.s';
// import { reducer as formReducer } from 'redux-form';




// import Registration from './slice/Registration.s';
// import UsersReducer from './slice/usersSlice';
// import LoginReducer from './slice/loginSlice';


 const store = configureStore({
   reducer:{
      lang: Language,
      burger: Burger,
      // navbar: Navbar
      // registr: Registration,
      // login: LoginReducer,
      // users: UsersReducer,
      // form: formReducer
   }
});


export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;