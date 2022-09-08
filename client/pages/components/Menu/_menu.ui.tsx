// import Navlink from '../Navlink/_navlink';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { TRootState } from '../../../store/store';
import { translation } from '../../../store/slice/_lang.s';
import styled, { keyframes, css } from 'styled-components'

// Navlink
type TNavlink = {
  children: any,
  href: string
}

function Navlink({ children, href }: TNavlink) {
  const router = useRouter()

  //   const style = {
  //     marginRight: 10,
  //     color: router.asPath === href ? 'red' : 'black',
  //   }

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className="max-lg:block text-md  leading-13 max-lg:text-primary text-white mobile-laptop:p-3  max-lg:drop-shadow-lg max-lg:px-30 max-lg:py-10 lg:py-30">
      {children}
    </a>
  )
};

// Menu
const Menu: FC = React.memo(() => {
  const { lang } = useSelector((state: TRootState) => state.lang)
  const [menuTrigger, setMenuTrigger] = useState<boolean>(false)
  const [sidebarWidth, setSidebarWidth] = useState<number>(0)
  const burgerRef = useRef<any>(null)
  const sidebarRef = useRef<any>(null)
  const links = [
    { name: translation("home", lang), href: '/' },
    { name: translation("news", lang), href: '#' },
    { name: translation("about", lang), href: '#' },
    { name: translation("contacts", lang), href: '#' }
  ]

  useEffect(()=>{
    function forceUpdate() { setSidebarWidth(Number(sidebarRef.current.offsetWidth))}
    forceUpdate()
   
    window.addEventListener('resize', () => {
      let flag = false
      if (window.innerWidth < 1023 && !flag) {
        forceUpdate()
        flag = true
      }

    });
    document.addEventListener('mousedown', (e) => {

      if (!sidebarRef.current.contains(e.target) && !burgerRef.current.contains(e.target)) {
        setMenuTrigger(false)
      }
    })
  },[sidebarRef])

  return (
    <div>
      <div ref={burgerRef} className="space-y-10 md:cursor-pointer lg:hidden max-md:p-15 p-30" onClick={(e) => { setMenuTrigger(!menuTrigger) }} >
        <div className={`h-2 bg-white transition-all ${menuTrigger ? 'w-30 ' : 'w-20 '}`}></div>
        <div className='w-25 h-2 bg-white'></div>
        <div className={`h-2 bg-white transition-all ${menuTrigger ? 'w-20' : 'w-30 '}`}></div>
      </div>

      <Sidebar isOpen={menuTrigger} boxWidth={sidebarWidth} className={`flex h-[100%] max-lg:fixed max-lg:backdrop-blur-sm max-lg:bg-secondary/30 max-lg:top-0 max-lg:left-0 ease-linear z-[-10] max-lg:overflow-hidden lg:ml-30`}>
        <ul ref={sidebarRef} className='lg:flex lg:space-x-30 max-lg:pt-[100px]'>
          {links.map((link, i) => <li key={i} className="max-lg:mb-10"><Navlink href={link.href}>{link.name}</Navlink></li>)}
        </ul>
      </Sidebar>
    </div>
  );
});


Menu.displayName = "Menu";
export default Menu;

type TSidebar = {
  boxWidth: number,
  isOpen :boolean
}

const Sidebar = styled.nav`
  @media (max-width: 1023px) {
    width:0;
    min-width: 0;
    min-width: ${(props:TSidebar)=> props.isOpen && props.boxWidth}px;
    transition: min-width .3s linear;
  }
`;
