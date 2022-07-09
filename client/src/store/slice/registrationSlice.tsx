import { createSlice } from "@reduxjs/toolkit";


const registrationSlice = createSlice({
   name: 'registration',
   initialState:[],
   reducers:{
      setRegistration:(state, action)=>{

      }
   }
})

export const {setRegistration} = registrationSlice.actions;
export default registrationSlice.reducer
