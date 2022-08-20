import { createSlice } from "@reduxjs/toolkit";


export type TBesides = {
   isOpen: boolean,
   getStatus: (isOpen:boolean)=>void,
   // getEvent: (event:object)=>void
};

const Besides = createSlice({
   name: 'besides',
   initialState: { 
      isOpen: false,

   
   }as TBesides,
   reducers:{
      getStatus:(state, {payload})=>{
         return{ 
            ...state,
            isOpen: payload
         }
      },

      getEvent:(state, {payload})=>{
         console.log(payload);
         
         return{ 
            ...state,
            eventType: payload
         }
      }
   }
});


export const {getStatus, getEvent} = Besides.actions;
export default Besides.reducer;




