import Navlink from '../Navlink/_navlink';
import React, {FC, useState} from 'react';


const Nav:FC = () => {

    const [manuTrigger, setManuTrigger] = useState(false)

    return (
    
        <nav className ={`flex items-center absolute top-[calc(100%+30px)] w-full mobile-laptop:h-[calc(100vh-100px)] z-50 lg:static ${manuTrigger ? "left-0 bg-red" : "-left-[100%]"}`}>

            <ul className='lg:flex lg:space-x-30 pt-[7px]'>

                <li>
                    <Navlink href='/'>Home</Navlink>
                </li>

                <li>
                    <Navlink href='#'>News</Navlink>
                </li>

                <li>
                    <Navlink href='#'>About</Navlink>
                </li>

                <li>
                    <Navlink href='#'>Contacts</Navlink>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;