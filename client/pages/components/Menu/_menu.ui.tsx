// import Navlink from '../Navlink/_navlink';
import React, { FC, useState} from 'react';
import { useRouter } from 'next/router'

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
    <a href={href} onClick={handleClick} className="text-md leading-13 text-white mobile-laptop:p-3 block max-lg:py-10">
      {children}
    </a>
  )
};


const Menu: FC = () => {
  const [menuTrigger, setMenuTrigger] = useState<boolean>(false)
  const links = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contacts', href: '#' }
  ]

  return (
    <div className='py-30 max-md:py-15'>
      <div className="space-y-10 cursor-pointer lg:hidden" onClick={(e) => { setMenuTrigger(!menuTrigger) }} >
        <div className={`h-2 bg-white transition-all ${menuTrigger ? 'w-30 ' : 'w-20 ' }`}></div>
        <div className='w-25 h-2 bg-white'></div>
        <div className={`h-2 bg-white transition-all ${menuTrigger ? 'w-20' : 'w-30 ' }`}></div>
      </div>

      <nav className={`max-lg:fixed max-lg:bg-primary max-lg:w-[100%] max-lg:top-0 max-lg:h-[100vh] transition-all ease-linear z-[-10]  ${menuTrigger ? 'left-0' : '-left-[100%]' }`}>
        <ul className='lg:flex lg:space-x-30 pt-[7px] max-lg:pt-[100px] max-lg:px-30'>
          {links.map((link, i) => <li key={i} className="max-lg:mb-10"><Navlink href={link.href}>{link.name}</Navlink></li>)}
        </ul>
      </nav>
    </div>
  );
};



export default Menu;
