import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TRootState } from '../../../store/store';
import { translation } from '../../../store/slice/_lang.s';
//components
import Button from '../Button/_button.ui';
import Burger from '../Burger/_burger.ui';
import Nav from '../Nav/_nav.ui';
import Besides from '../Besides';
import Lang from '../Lang/_lang.se';


// import tw from "tailwind-styled-components";
 
const Navbar = () => {
  const BesidesBodyOpen = useSelector((state: TRootState) => state.besides.isOpen)
  const {lang} = useSelector((state: TRootState) => state.lang)




  

  const [BesidesBodyHeight, setBesidesBodyHeight] = useState(0)
  const [BesidesBodyOverflow, setBesidesBodyOverflow] = useState(false)
  const BesidesBodyRef = useRef<any>(null)
  
  useEffect(() => {

    function forceUpdate() {
      const IsNumber = Number(BesidesBodyRef.current.offsetHeight)
      setBesidesBodyHeight(IsNumber)
    }

    forceUpdate()

    window.addEventListener('resize', () => {
      let flag = false
      if (window.innerWidth < 768 && !flag) {
        forceUpdate()
        flag = true
      }

    });
 
    if(BesidesBodyOpen){
      setTimeout(() => {
        setBesidesBodyOverflow(!BesidesBodyOverflow);
      }, 300)
    }setBesidesBodyOverflow(false)

  }, [BesidesBodyOpen])

  return (
    <div className="block-fixed w-full z-20 left-0 top-0 bg-primary flex justify-between items-center relative py-30 max-md:py-15">
      <div className="flex">
        <Burger />
        <Nav />
      </div>
      
      <div className="">{}</div>

      <div className="flex space-x-30 items-center">
        <div className="max-md:relative">

          <Besides />
          <BesidesBody isOpen={BesidesBodyOpen} isOverflow={BesidesBodyOverflow} childHeight={BesidesBodyHeight} className="max-md:absolute max-md:top-[calc(100%+15px)] max-md:right-0 bg-primary max-md:h-0 rounded-b-md max-md:overflow-hidden">
            <div ref={BesidesBodyRef} className="flex max-md:flex-col-reverse md:space-x-30 max-md:py-30 transition-all">
              <Lang/>
              {/* <Button name="Registration" link='link' className="inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20"/> */}
               {/* name={} link='link' /> */}
                {/* <a href="#" className="inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20">{translation("registr" , lang)}</a> */}
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
  childHeight: any,
  isOpen: boolean,
  isOverflow: boolean
}

const BesidesBody = styled.div`
  @media (max-width: 768px) {
    height: 0px; 
    transition: all .3s;
    height: ${(props: TOpen) => props.isOpen && props.childHeight}px;
    overflow: ${(props: TOpen) => props.isOverflow ? 'visible': 'hidden'};
  }
`;
