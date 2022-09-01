import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TRootState } from '../../../store/store';
import { translation} from '../../../store/slice/_lang.s';

//components
import Button from '../Button/_button.ui';
import Burger from '../Burger/_burger.ui';
import Nav from '../Nav/_nav.ui';
import Lang from '../Lang/_lang.se';



 
const Navbar = () => {

  const {lang} = useSelector((state: TRootState) => state.lang)
  const [DropdownIsOpen, setBesidesIsOpen] = useState(false)
  const [DropdownHeight, setBesidesBodyHeight] = useState(0)
  const DropdownInnerRef = useRef<any>(null)
  const lines = [1,2,3]

  useEffect(() => {

    function forceUpdate() {
      const IsNumber = Number(DropdownInnerRef.current.offsetHeight)
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

    document.addEventListener('click',(e) => {
      if(!DropdownInnerRef.current.contains(e.target)){
          // setBesidesIsOpen(false)
      }
    })

  }, [])

  return (
    <div className="block-fixed w-full z-20 left-0 top-0 bg-primary flex justify-between items-center relative py-30 max-md:py-15">
      <div className="flex">
        <Burger />
        <Nav />
      </div>
      
      <div className="">{}</div>

      <div className="flex space-x-30 items-center">
        <div className="max-md:relative">
              <div 
                className="border-2 h-6 border-secondary rounded-[5px] p-1 md:hidden" 
                onClick={(e)=> setBesidesIsOpen((isOpen)=> !isOpen)}>
                {lines.map((x , i)=> <div key={i} className='bg-secondary w-0.5 h-0.5'></div>)}
            </div>
          {/* <Besides /> */}
          <Dropdown isOpen={DropdownIsOpen} childHeight={DropdownHeight} className="max-md:absolute max-md:top-[calc(100%+15px)] max-md:right-0 bg-primary max-md:h-0 rounded-b-md max-md:overflow-hidden">
            <div ref={DropdownInnerRef} className="flex max-md:flex-col-reverse md:space-x-30 max-md:py-30 transition-all">
              <Lang/>
              {/* <Button name="Registration" link='link' className="inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20"/> */}
               {/* name={} link='link' /> */}
                <a href="#" className="inline-block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-30 max-md:mb-20">{translation("registr" , lang)}</a>
            </div>
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
  childHeight: any,
  isOpen: boolean,
}

const Dropdown = styled.div`
  @media (max-width: 768px) {
    height: 0px; 
    transition: all .3s;
    height: ${(props: TOpen) => props.isOpen && props.childHeight}px;
  }
`;