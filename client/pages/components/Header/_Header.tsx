import React, { useState } from 'react';
import Navbar from '../Navbar/_navbar';

const Header = () => {

  return (
    <header className='bg-primary'>
      <div className="container">
         <Navbar/>
      </div>
    </header>
  )
};

export default Header;