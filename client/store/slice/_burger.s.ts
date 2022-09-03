import { createSlice } from "@reduxjs/toolkit"; 


export type TBurger = {
   isOpen: boolean
};

const Burger = createSlice({
   name: 'burger',
   initialState: { isOpen: false}as TBurger,
   reducers:{
      setBurgerStatus:(state, {payload})=>{
         return{ 
            ...state,
            isOpen: payload
         }
      },

   }
});


export const {setBurgerStatus} = Burger.actions;
export default Burger.reducer;




