import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TRootState } from '../../../store/store';
import { translation } from '../../../store/slice/_lang.s';

//components
import Menu from '../Menu/_menu.ui';
import Nav from '../Menu/_menu.ui';
import Lang from '../Lang/_lang.se';

const Navbar = () => {

  const { lang } = useSelector((state: TRootState) => state.lang)
  // ...IO - Is Open
  const [DropdownIO, setDropdownIO] = useState<boolean>(false)
  const [DropdownHeight, setDropdownHeight] = useState<number>(0)
  const DropdownInnerRef = useRef<any>(null)
  const BesidesRef = useRef<any>(null)
  const lines = [1, 2, 3]



  useEffect(() => {

    function forceUpdate() { setDropdownHeight(Number(DropdownInnerRef.current.offsetHeight)) }
    forceUpdate()

    window.addEventListener('resize', () => {
      let flag = false
      if (window.innerWidth < 768 && !flag) {
        forceUpdate()
        flag = true
      }

    });

    document.addEventListener('mousedown', (e) => {

      if (!DropdownInnerRef.current.contains(e.target) && !BesidesRef.current.contains(e.target)) {
        setDropdownIO(false)
      }
    })

  }, [])

  return (
    <div className="block-fixed w-full z-20 left-0 top-0 bg-primary flex justify-between items-center relative">

      <Menu />

      <div className="flex space-x-30 items-center py-30 max-md:py-15">
        <Lang />
        <div className="max-md:relative">
          {/* Besides */}
          <div
            ref={BesidesRef}
            className="border-2 h-6 border-secondary rounded-[5px] p-1 md:hidden"
            onClick={() => setDropdownIO(isOpen => !isOpen)}>
            {lines.map((x, i) => <div key={i} className='bg-secondary w-0.5 h-0.5'></div>)}
          </div>

          <Dropdown isOpen={DropdownIO} childHeight={DropdownHeight} className="max-md:absolute max-md:top-[calc(100%+15px)] max-md:right-0 bg-primary rounded-b-md max-md:overflow-hidden max-md:h-0">
            <div ref={DropdownInnerRef} className=" md:flex mx-auto md:space-x-30 max-md:py-15 transition-all shadow-2xl text-center px-15">
              <div className=""><a href="#" className="block text-sm-xx md:text-md leading-12 text-shadow text-secondary max-md:px-20 max-md:mb-20 py-2">{translation("registr", lang)}</a></div>
              <div className=""><a className="bg-secondary block text-center py-2 px-20 md:rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0 rounded-md">Log in</a></div>
            </div>
          </Dropdown>
        </div>
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
    min-height: 0;
    min-height: ${(props: TOpen) => props.isOpen && props.childHeight}px;
    transition: all .3s;
  }
`;
