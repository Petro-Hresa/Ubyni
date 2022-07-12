import React from "react";
import { BrowserRouter, NavLink , Routes, Route } from 'react-router-dom';
//components
import Header from "./components/Header/Header";
import RegistrationContainer from "./components/Registration/RegistrationContainer";

import './../src/assets/styles/style.scss'

const App = () => {
  return (
   <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/registration" element={ <RegistrationContainer/> }/>
        </Routes>
      
   </BrowserRouter>
  )
}

export default App
