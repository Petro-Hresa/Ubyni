import React from 'react'
import {Img} from '../Images/Images'


type TUsers ={
   users: []
}

type TUser ={
   email: string,
   firstName: string,
   id: number,
   imgName: string,
   lastName: string,
}



const Users = (props:TUsers) => {
   console.log(props.users);
   
  return (
    <div>

      {props.users.map((user:TUser, i) => {
         return(
            <div key={i} className="flex-1 min-w-[320px] my-2 border p-20 w-1/4" >
               <img className="" src={Img.Users[user.imgName as keyof typeof Img.Users] || Img.Users["default-user"]} alt={`User ${user.firstName} ${user.lastName}`} width='150' />
               <div className="text-md text-secondary font-bold">{user.firstName}</div>
               <div className="">{user.lastName}</div>
               <div className="">{user.email}</div>
            </div>
         )
      })}
    </div>
  )
}

export default Users
