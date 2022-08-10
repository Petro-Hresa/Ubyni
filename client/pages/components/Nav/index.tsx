import Link from 'next/link';
import React, {FC, useState} from 'react';
import { Button } from '../Button';
// import { NavLink, Link } from 'react-router-dom';

// import style from './Navbar.module.scss';
// type typeNav = {
//     className: any
// }

export const Nav:FC = () => {

    const [manuTrigger, setManuTrigger] = useState(false)

    return (
    
        <nav className ={`flex items-center absolute top-[calc(100%+30px)] w-full mobile-laptop:h-[calc(100vh-100px)] z-50 lg:static ${manuTrigger ? "left-0 bg-red" : "-left-[100%]"}`}>

            <ul className='lg:flex lg:space-x-30 pt-[7px]'>

                <li>
                    <Link href='/'>
                        <Button name='Home' 
                        className="text-md leading-13 text-white mobile-laptop:p-3 block"
                        href='#'/>
                    </Link>
                </li>

                <li>
                    <Link  href='#'>
                        <Button name='News' 
                        className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" 
                        href='#'/>
                    </Link>
                </li>

                <li>
                    <Link href='#'>
                        <Button name='About' 
                        className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" 
                        href='#'/>
                    </Link>
                </li>

                <li>
                    <Link href='#'>
                        <Button name='Contacts' 
                        className="font-roboto text-md leading-13 text-white mobile-laptop:p-3 block" 
                        href='#'/>
                    </Link>
                </li>

            </ul>

        </nav>
    
    );
}

