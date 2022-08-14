import React, { useState, useEffect, useRef } from 'react'
import Burger from '../Burger/_Burger';
import { Nav } from '../Nav/_Nav';
import Lang from '../Lang/_Lang'
import Link from 'next/link';
import { Button } from '../Button/_Button';
import Besides from '../Besides/_Besides';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/store';
import styled, {keyframes} from 'styled-components';
import tw from "tailwind-styled-components";



const Navbar = () => {
  const open = useSelector((state:TRootState)=> state.besides.isOpen)
  const wrapRef = useRef<any>(null)
  const boxRef = useRef<any>(null)

  const eventType = useSelector((state:TRootState)=> state.besides.eventType)

  console.log("eventType", eventType);
  

  useEffect(()=>{
    // let  styles = {
    //   height: besidesBox.current.offsetHeight
    //  }
    // heightOpen = ()=> {
    //   if(open){
    //     return besidesBox.current.offsetHeight
    //   }
    // }
  //  besidesBox.current.offsetHeight;
    // open ? besidesBox.current.style =  {height:besidesBox.current.offsetHeight} : ''
    // besidesBox.current
  },[])

  const heandleClick = ()=> {
    const wrapper = boxRef.current;
    wrapper.classList.toggle('is-nav-open')
  }
  
  // ${open ? 'max-md:h-auto' : 'max-md:h-0'}

  return (
    <div className="block-fixed w-full z-20 left-0 top-0 bg-primary flex justify-between items-center relative py-30 max-md:py-15">
      <div className="flex">
          <Burger/>
          <Nav/>
      </div>

      <div className="flex space-x-30 items-center">
        
     
      <div className="max-md:relative">
        <Besides/>
        <Wrap open={open} eventType={eventType}> 
            <div className="flex max-md:flex-col-reverse md:space-x-30 max-md:py-30">
              <Lang/>
              <Link href={'/registration'}>
                  <a className={"inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20"}>Registration</a>
              </Link> 
            </div>
        </Wrap>
      </div>  
        

      <Link href={'/login'}>
        <a  className="bg-secondary py-2 px-20 rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0">Log in</a>
      </Link>

     
      </div>
    </div>
  )
};




export default Navbar;


const OpenAnim = keyframes`
  from{
    max-md:h-0 
    overflow-hidden
  }

  to{
    max-md:h-[120px]
    overflow-visible
  }
`;

type TOpen = {
  open: boolean,
  eventType: string
}


const Wrap = tw.div`
  h-0
  overflow-hidden
  bg-primary  
  max-md:absolute 
  top-[calc(100%)] 
  max-md:-left-[31px]  
  max-md:rounded-bl-md 
  max-md:-z-[5] 
  max-md: 
  min-w-[190px] 
  transition-all
  ${(item:TOpen)=> 

     ((item.open && item.eventType === "click") ? "animate-open h-[120px]" : "animate-close")

}
`;


