import axios from "axios";

const instaince = axios.create({
   baseURL: "http://localhost:3000/api"
})

export const usersApi = {
   setUserRegistration:()=>{
      return instaince.post('/registration',{fullName, email, login, password, confirmPassword})
   }
}