import React, { useState, useEffect, useRef } from 'react'
import Burger from '../Burger/_Burger';
import Nav from '../Nav/_Nav';
import Lang from '../Lang/_Lang'
// import Link from 'next/link';
// import { Button } from '../Button/_Button';
import Besides from '../Besides/_Besides';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/store';
import styled, {keyframes} from 'styled-components';
import tw from "tailwind-styled-components";



const Navbar = () => {
  const open = useSelector((state:TRootState)=> state.besides.isOpen)

  const [boxHeight, setBoxHeight] = useState(0)
  const wrapRef = useRef<any>(null)
  const boxRef = useRef<any>(null)


  useEffect(()=>{
    const IsNumber = Number(boxRef.current.offsetHeight)
    setBoxHeight(IsNumber)
    
  },[])


  return (
    <div className="block-fixed w-full z-20 left-0 top-0 bg-primary flex justify-between items-center relative py-30 max-md:py-15">
      <div className="flex">
          <Burger/>
          <Nav/>
      </div>

      <div className="flex space-x-30 items-center">
        
     
      <div className="max-md:relative">
  
        <Besides/>
        <Dropdown open={open} heightBox={boxHeight}> 
            <Box open={open} ref={boxRef}>
              <Lang/>
              {/* <Link href={'/registration'}>
                  <a className={"inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20"}>Registration</a>
              </Link> 
              <Link href={'/registration'}>
                  <a className={"inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20"}>Registration</a>
              </Link>  */}
            </Box>
        </Dropdown>
      </div>  
        

      {/* <Link href={'/login'}>
        <a  className="bg-secondary py-2 px-20 rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0">Log in</a>
      </Link> */}

     
      </div>
    </div>
  )
};




export default Navbar;

type TOpen = {
  heightBox : any,
  open: boolean
}

const Dropdown = styled.div`
  position:absolute;
  top:100%;
  background: black;
  overflow:hidden;
  height: 0px; 
  transition: all .3s;
  height: ${(props:TOpen)=> props.open && props.heightBox}px

`;

const Box = tw.div`
  flex max-md:flex-col-reverse md:space-x-30 max-md:py-30 transition-all
`;
