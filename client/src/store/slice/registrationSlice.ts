import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";
import { TRegistrationForm } from "../../components/Registration/Registration";

import axios from "axios";

export const postUser = createAsyncThunk(
   'registration/postUser',
   async (userData, {rejectWithValue, dispatch, getState})=>{
      await axios.post('http://localhost:3000/api/registration', userData)
      .then(res =>{
         dispatch(setRegistration(res.data))
         console.log(userData);
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
         return{
            ...state,
            formData: action.payload
         }
      }
   },
   extraReducers:(builder)=>{
      builder.addCase(postUser.fulfilled, (state, {payload})=> {
         state.formData = payload
         console.log("builder",payload);
         
      })
     
   }
})

export const {setRegistration} = registrationSlice.actions;
export default registrationSlice.reducer
