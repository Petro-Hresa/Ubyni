import { createSlice } from "@reduxjs/toolkit";


export type TBesides = {
   isOpen: boolean,
   getStatus: (isOpen:boolean)=>void
};

const Besides = createSlice({
   name: 'besides',
   initialState: { isOpen: false }as TBesides,
   reducers:{
      getStatus:(state, {payload})=>{
         state.isOpen = payload
      }
   }
});


export const {getStatus} = Besides.actions;
export default Besides.reducer;




