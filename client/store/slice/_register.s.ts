import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from '../../pages/api/api';
// import { TRegistrationForm } from "../../components/Registration/Registration";

import axios from "axios";

export const postUser = createAsyncThunk(
   'registr/postUser',
   async (userData, {rejectWithValue, dispatch, getState})=>{
      
      await usersApi.setUserRegistration(userData)
   }
)

type TRegistr = {
   formData: any
}

const Registr = createSlice({
   name: 'registr',
   initialState:{
      formData:{}
   } as TRegistr,
   reducers:{
      // setRegistration:(state, action)=>{
      //    return{
      //       ...state,
      //       formData: action.payload
      //    }
      // }
   },
   extraReducers:(builder)=>{
      builder.addCase(postUser.fulfilled, (state, {payload})=> {
         // state.formData = payload
         // console.log("builder",payload);
         
      })
     
   }
})

export const {} = Registr.actions;
export default Registr.reducer
 


