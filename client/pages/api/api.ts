import axios from "axios";

const instaince = axios.create({
   baseURL: "http://localhost:3000"
})

type TUserApi = {

}
export const usersApi = {
   SUserRegistration:(userData:TUserApi)=>{
      return instaince.post('auth/registration', userData)
   },

   GUsers: ()=>{
      return instaince.get('/api/users').then(request => request.data)
   }
}