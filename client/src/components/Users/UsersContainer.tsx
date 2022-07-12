import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { RootState } from '../../store/store'
import { getUsers } from '../../store/slice/usersSlice'

type TUsersContainer = {
   getUsers: ()=>void,
   users: []
}

export const UsersContainer = (props:TUsersContainer) => {
   useEffect(()=>{
      props.getUsers()
   },[])
   
  return (<Users {...props}/>)
}

const mapStateToProps = (state:RootState) =>{
   return{
      users: state.users.users
   }
}

export default connect(mapStateToProps,{getUsers})(UsersContainer)
