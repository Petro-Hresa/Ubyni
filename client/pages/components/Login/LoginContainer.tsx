import React, { Component,} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from './Login'
import axios from 'axios'
import { RootState } from '../../store/store'
import { setLogin, setPassword } from '../../store/slice/loginSlice'
// import { setLang, setPassword } from '../../store/slice/lenguageSlice'


export type LoginType = {
  login: string,
  password: string,
  setLogin?: (value:string)=>void,
  setPassword?: (value:string)=>void
}
//  type authType = {
//   login: string
//  }

// export class LoginContainer extends Component <LoginType> {
//   // {login, password}
//   // {login:login, password:password}
//   componentDidMount() {
//     // console.log("axios");
  
//   }
//   // http://localhost:3001/api/
//   handleSubmit(e:any){
//     e.preventDefault()
//     debugger
//     console.log("login:", this.props, "password:", this.props);
    
//     // axios.post('http://localhost:3001/api/login', {login: this.props.login, password: this.props.password})
//     // .then((req) => {
//       // setLogin(req.data);
//       // console.log("axios", req.data);
      
//     // })
//   }


//   render() {
//     return (
//      <Login 
//      handleSubmit={this.handleSubmit} 
//      login={this.props.login}
//      password={this.props.password}
//      setLogin={this.props.setLogin} 
//      setPassword={this.props.setPassword} />
//     )
//   }
// }
const LoginContainer:React.FC<LoginType> = (props)=>{

  const handleSubmit = async (e:any)=>{

    e.preventDefault()

    let {login, password} = props

    
    try{
      await axios.post('http://localhost:3001/api/login', {login, password} )

    }catch(err){
      console.log("error", err);
    }
    
  }

  return(
    <Login handleSubmit={handleSubmit} {...props}/>
  )
}


const getAuthUser =()=> {
  try{
    // await axios.get('http://localhost:3001/api/')
  }catch(err){ console.log('Access user')}
  
}



const mapStateToProps =(state:RootState)=>{
    return{
      login: state.login.login,
      password: state.login.password
    }
}

export default connect (mapStateToProps, {setLogin,setPassword}) (LoginContainer)
