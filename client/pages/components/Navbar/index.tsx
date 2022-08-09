import React, {FC, useRef, useEffect ,useState, useLayoutEffect} from 'react';
import Link from 'next/link';
// import { NavLink, useLocation} from 'react-router-dom';

//components
import Lang from '../Lang';
import { Button } from '../Button';
import Burger from '../Burger';
import { Nav } from '../Nav';
// import { Hamburger } from '../Hamburger/Hamburger';
// import { Nav } from '../Nav/Nav';
// import { Svg } from '../Images/Images';

// type Navbar = {
//    headerRef: {}
// }
const Navbar = () => {

   // let location = useLocation();
   // const headerRef = useRef(null);
 
 
   
   // const [height, setHeight] = useState(400);
   // const [heightHome, setHeightHome] = useState(0);
   // const [scrolY, setScrolY] = useState(100);
   // useLayoutEffect(()=> {
      //  setHeight(props.headerRef.current.clientHeight)
      //  const onScroll = () => setScrolY(window.pageYOffset);
      //  window.addEventListener('scroll', onScroll);
       // window.addEventListener('resize', debounce(()=>{setHeight(headerRef.current.clientHeight)}, 30));
 
      //  if(location.pathname == "/" || props.headerRef.current.clientHeight > 100){
      //      setHeightHome(height)  
      //  }
 
   // }, [])

 

  return (

   <div className="block-fixed w-full z-20 left-0 top-0 bg-primary">
      
      <div className="container flex justify-between items-center relative py-30">

         <div className="flex">
            <Burger/>
            {/* <Hamburger onClick={()=>setManuTrigger(!manuTrigger)}/> */}
            {/* <Nav `}/> */}
            <Nav/>
         </div>

         <div className={"w-30 stroke-secondary fill-secondary item-center"}>
             {/* <Svg name="emblem"/> */}
         </div>

         <div className="flex space-x-30 items-center">
            <Lang/>

            <Link href={'/registration'}>
               <Button name='Registration' 
               href='#' 
               className={"text-sm-xx md:text-md leading-12 text-shadow text-secondary"}/>
            </Link>

            <Link href={'/login'}>
               <Button name='Log in' 
               href='#' 
               className="bg-secondary py-2 px-20 rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0"/>
            </Link>
         </div>

      </div>

   </div>

  )
};

export default Navbar;
