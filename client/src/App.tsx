import React from "react";
import { BrowserRouter, NavLink , Routes, Route } from 'react-router-dom';
//components
import Header from "./components/Header/Header";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import LoginContainer from "./components/Login/LoginContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Home from "./components/Home/Home";
import './../src/assets/styles/style.scss'

const App = () => {
  return (
   <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={ <Home/> }/>
          <Route path="/registration" element={ <RegistrationContainer/> }/>
          <Route path="/login" element={ <LoginContainer/> }/>
          <Route path="/users" element={ <UsersContainer/> }/>
        </Routes>
      
   </BrowserRouter>
  )
}

export default App
