import { createSlice } from "@reduxjs/toolkit";


type  TLogin ={
   login:string,
   password:string
}

const initialState:TLogin = {
      login:'',
      password:''
}
// console.log("Reducer-",typeof initialState.login);

const LoginSlice = createSlice({
   name: "authorization",
   initialState,
   reducers:{
      setLogin: ( state, {payload} )=>{
         console.log(payload);
         return{
            ...state,
            login:payload
         }
      },

      setPassword: ( state, {payload} )=>{
         return{
            ...state,
            password:payload
         }
      }
   }
})

export let {setLogin, setPassword} = LoginSlice.actions

export default LoginSlice.reducer