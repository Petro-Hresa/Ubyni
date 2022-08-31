// import Navlink from '../Navlink/_navlink';
import React, {FC, useState, memo} from 'react';

import { useRouter } from 'next/router'

type TNavlink = {
   children: any,
   href:string
}

function Navlink({ children, href }:TNavlink) {
  const router = useRouter()

//   const style = {
//     marginRight: 10,
//     color: router.asPath === href ? 'red' : 'black',
//   }

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className="text-md leading-13 text-white mobile-laptop:p-3 block">
      {children}
    </a>
  )
};


const Nav:FC = () => {

    const [manuTrigger, setManuTrigger] = useState(false)
    const links = [
        {name : 'Home', href: '/'},
        {name : 'News', href: '#'},
        {name : 'About', href: '#'}, 
        {name : 'Contacts', href: '#'}   
    ]

    return (
        <nav className ={`flex items-center absolute top-[calc(100%+30px)] w-full mobile-laptop:h-[calc(100vh-100px)] z-50 lg:static ${manuTrigger ? "left-0 bg-red" : "-left-[100%]"}`}>

            <ul className='lg:flex lg:space-x-30 pt-[7px]'>
                {links.map((link, i) => <li key={i}><Navlink  href={link.href}>{link.name}</Navlink></li>)}
            </ul>
        </nav>
    );
};

export default Nav;