// import { Link } from './routes';
import React, {FC, useState} from 'react';
// import { Button } from '../Button/_Button';
// import { NavLink, Link } from 'react-router-dom';
// useState

// import style from './Navbar.module.scss';
// type typeNav = {
//     className: any
// }

const Nav:FC = () => {

    const [manuTrigger, setManuTrigger] = useState(false)

    // const [i, setI] = useState(false)
    // console.log(i);

    return (
    
        <nav className ={`flex items-center absolute top-[calc(100%+30px)] w-full mobile-laptop:h-[calc(100vh-100px)] z-50 lg:static ${manuTrigger ? "left-0 bg-red" : "-left-[100%]"}`}>

            <ul className='lg:flex lg:space-x-30 pt-[7px]'>

                <li>
                    {/* <Link href='/'>
                        <a className="text-md leading-13 text-white mobile-laptop:p-3 block">Home</a>
                    </Link> */}
                </li>

                <li>
                    {/* <Link  href='#'>
                        <a className="text-md leading-13 text-white mobile-laptop:p-3 block">News</a>
                    </Link> */}
                </li>

                <li>
                    {/* <Link href='#'>
                        <a className="text-md leading-13 text-white mobile-laptop:p-3 block">About</a>
                    </Link> */}
                </li>

                <li>
                    {/* <Link href='#'>
                        <a className="text-md leading-13 text-white mobile-laptop:p-3 block">Contacts</a>
                    </Link> */}
                </li>

            </ul>

        </nav>
    
    );
}

export default Nav;