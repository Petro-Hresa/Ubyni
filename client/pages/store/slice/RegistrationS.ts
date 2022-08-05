import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";
import { TRegistrationForm } from "../../components/Registration/Registration";

type TUserData = {
   
}

export const postUser = createAsyncThunk(
   'registration/postUser',
   async (userData, {rejectWithValue, dispatch, getState})=>{
      
      await usersApi.SUserRegistration(userData)
   }
);

type TRegistration = {
   formData: string
};

const registration = createSlice({
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
});

export const {} = registration.actions;
export default registration.reducer;
 