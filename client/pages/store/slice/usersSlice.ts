import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "../../api/api";

export const getUsers = createAsyncThunk('users/getUsers',

 async (_,{dispatch})=>{
      await usersApi.getUsers().then(data =>{
         dispatch(setUsers(data))
      })
   }
)


const UsersSlice = createSlice({
   name: 'users',
   initialState:{
      users:[]
   },
   reducers:{
      setUsers:(state, action)=>{
         return{
            ...state,
            users: action.payload
         }
        
      }
   },
   extraReducers:(builder)=>{

   }
})

export const {setUsers} = UsersSlice.actions
export default UsersSlice.reducer