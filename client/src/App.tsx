import React from "react";
import { BrowserRouter, NavLink , Routes, Route } from 'react-router-dom';
//components
import Header from "./components/parts/Header/Header";

import './../src/assets/styles/style.scss'

const App = () => {
  return (
   <BrowserRouter>
      <Header/>
   </BrowserRouter>
  )
}

export default App
