import { createSlice } from "@reduxjs/toolkit";


export type TBesides = {
   isOpen: boolean,
   getStatus: (isOpen:boolean)=>void,
   eventType: string,
   getEvent: (event:string)=>void
};

const Besides = createSlice({
   name: 'besides',
   initialState: { 
      isOpen: false,
      eventType: '' 
   
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




