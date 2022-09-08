import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { 
   persistStore, 
   persistReducer,  
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// reducers
import Language from './slice/_lang.s';
import Register from './slice/_register.s';

const rootReducer = combineReducers({
   lang: Language,
   register: Register,
   form: formReducer
})


const persistConfig = {
   key: 'root',
   storage,
 }


 const persistedRducer = persistReducer(persistConfig , rootReducer)

 const store = configureStore({
   reducer: persistedRducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
     serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
     },
   }),
});

export const persistor = persistStore(store)


export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;