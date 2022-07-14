import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";
import { TRegistrationForm } from "../../components/Registration/Registration";

import axios from "axios";

export const postUser = createAsyncThunk(
   'registration/postUser',
   async (userData, {rejectWithValue, dispatch, getState})=>{
      
      await usersApi.setUserRegistration(userData)
   }
)

type TRegistration = {
   formData: any
}

const registrationSlice = createSlice({
   name: 'registration',
   initialState:{
      formData:{}
   } as TRegistration,
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

export const {} = registrationSlice.actions;
export default registrationSlice.reducer
 