import React, {FC, useRef, useEffect ,useState, useLayoutEffect} from 'react';
import { NavLink, useLocation} from 'react-router-dom';

//components
import { Hamburger } from '../Hamburger/Hamburger';
import { Nav } from '../Nav/Nav';
import { IconSvg } from '../Images/Images';
import LangContainer from '../Lang/LangContainer';
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

   const [manuTrigger, setManuTrigger] = useState(false);

  return (
   <div className="block-fixed w-full z-20 left-0 top-0 bg-primary">
      <div className="container flex justify-between items-center relative py-30">
         <div className="flex">
            <Hamburger onClick={()=>setManuTrigger(!manuTrigger)}/>
            <Nav className ={`flex items-center absolute top-[calc(100%+30px)] w-full mobile-laptop:h-[calc(100vh-100px)] z-50 lg:static ${manuTrigger ? "left-0 bg-red" : "-left-[100%]"}`}/>
         </div>
         <div className={"w-30 stroke-secondary fill-secondary item-center"}>
             <IconSvg name="emblem"/>
         </div>
         <div className="flex space-x-30 items-center">
             <LangContainer/>
             <NavLink to={'/registration'} className={`text-sm-xx md:text-md leading-12 text-shadow text-secondary`}>Registration </NavLink>
             <NavLink to={'/login'} className='bg-secondary py-2 px-20 rounded-[5px] font-semibold text-primary text-sm-xx md:text-md leading-12 flex-shrink-0 flex-grow-0'> Log in </NavLink>
         </div>
      </div>
   </div>
  )
}

export default Navbar
