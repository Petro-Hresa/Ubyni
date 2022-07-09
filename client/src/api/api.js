import axios from "axios";

const instaince = axios.create({
   baseURL: "http://localhost:3000/api"
})

export const usersApi = {
   setUsersRegistration:()=>{
      return instaince.post('/registration')
   }
}