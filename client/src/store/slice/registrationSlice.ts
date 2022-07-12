import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";
import { TRegistrationForm } from "../../components/Registration/Registration";

import axios from "axios";

export const postUser = createAsyncThunk(
   'registration/postUser',
   async (formData, {dispatch})=>{
      await axios.post('http://localhost:3000/api/registration', formData).then(res =>{
         console.log(res.data);
         
      })
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
      setRegistration:(state, action)=>{
         state.formData = action.payload;
         
      }
   },
   extraReducers:(builder)=>{
      builder.addCase(postUser.fulfilled, (state, {payload})=> {
         state.formData = payload
         console.log("builder", payload);
      })
     
   }
})

export const {setRegistration} = registrationSlice.actions;
export default registrationSlice.reducer
