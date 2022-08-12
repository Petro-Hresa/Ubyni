import React, { useState, useEffect } from 'react'
import Burger from '../Burger/_Burger';
import { Nav } from '../Nav/_Nav';
import Lang from '../Lang/_Lang'
import Link from 'next/link';
import { Button } from '../Button/_Button';
import Besides from '../Besides/_Besides';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/store';

const Navbar = () => {
  const open = useSelector((state:TRootState)=> state.besides.isOpen)

  return (
    <div className="block-fixed w-full z-20 left-0 top-0 bg-primary flex justify-between items-center relative py-30 max-md:py-15">
      <div className="flex">
          <Burger/>
          <Nav/>
      </div>

      <div className="flex space-x-30 max-md:relative items-center">
        
        {open &&
          <div className="flex max-md: max-md:flex-col-reverse md:space-x-30 max-md:absolute max-md:top-[calc(100%)] bg-primary -right-30 max-md:p-30 rounded-bl-md max-md:-z-[5]"> 
            <Lang/>
            <Link href={'/registration'}>
                <a className={"inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:mb-20"}>Registration</a>
            </Link> 
          </div> 
       
        }
        <Link href={'/login'}>
          <a  className="bg-secondary py-2 px-20 rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0">Log in</a>
        </Link>

        <Besides/>
      </div>
    </div>
  )
}

export default Navbar;
