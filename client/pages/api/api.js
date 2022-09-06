import axios from "axios";

const instaince = axios.create({
   baseURL: "http://localhost:3000"
})

export const usersApi = {
   setUserRegistration:(userData)=>{
      return instaince.post('auth/registration', userData)
   },

   getUsers: ()=>{
      return instaince.get('/api/users').then(request => request.data)
   }
}