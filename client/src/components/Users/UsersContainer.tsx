import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { RootState } from '../../store/store'
import { getUsers } from '../../store/slice/usersSlice'

import axios from 'axios'

type TUsersContainer = {
   getUsers: ()=>void
}

export const UsersContainer = (props:TUsersContainer) => {
   useEffect(()=>{
      // axios.get("http://localhost:3000/api/users").then(data =>{
      //    console.log(data);
      // })
      props.getUsers()
   })
  return (<Users/>)
}

const mapStateToProps = (state:RootState) =>{
   return{}
}

export default connect(mapStateToProps,{getUsers})(UsersContainer)
