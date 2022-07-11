import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";
import { TRegistrationForm } from "../../components/parts/Header/Navbar/Authorization/Registration/Registration";
export const postUser = createAsyncThunk(
   'registration/postUser',
   async (registration:TRegistrationForm, {dispatch})=>{
      console.log(registration);
      
      await usersApi.setUserRegistration
   }
)

const registrationSlice = createSlice({
   name: 'registration',
   initialState:{
      formData:{}
   },
   reducers:{
      setRegistration:(state, action)=>{
         state.formData = action.payload;
         
      }
   }
})

export const {setRegistration} = registrationSlice.actions;
export default registrationSlice.reducer
