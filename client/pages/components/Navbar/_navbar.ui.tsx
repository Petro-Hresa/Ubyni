import React, { useState, useEffect, useRef } from 'react'
import Burger from '../Burger/_burger.ui';
import Nav from '../Nav/_nav.ui';
import Besides from '../Besides';
import styled from 'styled-components'
// import { Button } from '../Button/_Button';

import { useSelector } from 'react-redux';
import { TRootState } from '../../../store/store';

// import tw from "tailwind-styled-components";



const Navbar = () => {
  const BesidesBodyOpen = useSelector((state:TRootState)=> state.besides.isOpen)

  const [BesidesBodyHeight, setBesidesBodyHeight] = useState(0)
  // const wrapRef = useRef<any>(null)
  const BesidesBodyRef = useRef<any>(null)



  useEffect(()=>{
    const IsNumber = Number(BesidesBodyRef.current.offsetHeight)
    setBesidesBodyHeight(IsNumber)
    window.addEventListener('resize', ()=>{
     console.log(window.innerWidth);
      
    });
  
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
        <BesidesBody isOpen={BesidesBodyOpen} childHeight={BesidesBodyHeight} className="max-md:absolute max-md:top-[calc(100%+15px)] max-md:right-0 bg-primary max-md:h-0 max-md:overflow-hidden"> 
            <div ref={BesidesBodyRef} className="flex max-md:flex-col-reverse md:space-x-30 max-md:py-30 transition-all">
              {/* <Lang/> */}
                  <a className={"inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20"}>Registration</a>
           </div>
        </BesidesBody>
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
  childHeight : any,
  isOpen: boolean
}

const BesidesBody = styled.div`
  @media (max-width: 768px) {
    overflow:hidden;
    height: 0px; 
    transition: all .3s;
    height: ${(props:TOpen)=> props.isOpen && props.childHeight}px;
  }
`;

// const Box = tw.div`
//   flex max-md:flex-col-reverse md:space-x-30 max-md:py-30 transition-all
// `;
