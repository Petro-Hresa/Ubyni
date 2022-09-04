// import Navlink from '../Navlink/_navlink';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
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
const Menu: FC = () => {
  const [menuTrigger, setMenuTrigger] = useState<boolean>(false)
  const [sidebarWidth, setSidebarWidth] = useState<number>(0)
  const sidebarRef = useRef<any>(null)
  const links = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contacts', href: '#' }
  ]

  useEffect(()=>{
    setSidebarWidth(Number(sidebarRef.current.offsetWidth))
    console.log(sidebarRef.current.offsetWidth);
  })

  return (
    <div className=''>
      <div className="space-y-10 md:cursor-pointer lg:hidden max-md:p-15 p-30" onClick={(e) => { setMenuTrigger(!menuTrigger) }} >
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
};



export default Menu;

type TSidebar = {
  boxWidth: number,
  isOpen :boolean
}

// max-lg:w-[100%]  max-lg:h-[100vh
// const SidebarAnim =(props:TSidebar) => keyframes`

//   ${()=>
//       props.isOpen && css`0%{ height: 100px; width: 100px;} 100% { height: 100px; width: 100px; opacity: 0.6; }`};



// `;

const SidebarAnim =(props:TSidebar) => keyframes`
      0%{} 
      100% { left: 0 }
`;

const Sidebar = styled.nav`
@media (max-width: 1023px) {
  width:0;
  min-width: 0;
  min-width: ${(props:TSidebar)=> props.isOpen && props.boxWidth}px;
  transition: min-width .3s linear;
}

`;
