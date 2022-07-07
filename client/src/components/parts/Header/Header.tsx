import React, {FC, useRef, useEffect ,useState, useLayoutEffect} from 'react';
import { NavLink, useLocation} from 'react-router-dom';
// import { debounce } from '../../../App';
// import { RootState } from '../../../data/redux/store';
// import { useSelector } from "react-redux";
// import { translation } from '../../../data/locales/languages/languages';
import { translation } from '../../../store/slice/lenguageSlice';

//components
import Navbar from './Navbar/Navbar';
import { IconSvg } from '../../general/Images';
import { Button } from '../../general/Button';

// import './Header.scss';

const Header = () => {

  // let location = useLocation();
  const headerRef = useRef(null);


  
  // const [height, setHeight] = useState(400);
  // const [heightHome, setHeightHome] = useState(0);
  // const [scrolY, setScrolY] = useState(100);
  // useLayoutEffect(()=> {
  //     setHeight(headerRef.current.clientHeight)
  //     const onScroll = () => setScrolY(window.pageYOffset);
  //     window.addEventListener('scroll', onScroll);
  //     // window.addEventListener('resize', debounce(()=>{setHeight(headerRef.current.clientHeight)}, 30));

  //     if(location.pathname == "/" || headerRef.current.clientHeight > 100){
  //         setHeightHome(height)  
  //     }

  // }, [])




 
  // const lang = useSelector((state: RootState) => state.languages.language)

  return (

    <header ref={headerRef} style={{minHeight: "500px" }} >
            <Navbar/>
            <div className={`block-fixed bg-primary mobile-md:h-screen w-full z-0`}>
             
                <div className="container h-full flex flex-col relative py-50">
                    <div  style={{}}  className="anim_time-line absolute bg-secondary w-[2px] top-0 bottom-0 left-0 z-30"></div>


                        <div className={`flex flex-col items-center mobile-laptop:flex-1 mobile-laptop:justify-center ${location.pathname !== "/" ? "p-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ": 'pt-80 pb-40'}`}>
                            <div className={location.pathname !== "/" ? "hidden": "max-w-116 w-full mx-[300px] stroke-secondary fill-secondary"}>
                                <IconSvg name="emblem"/>
                            </div> 
                            {/*  */}
                            <Button name={translation('villegName')} href="#" className={`text-center block font-texturina text-secondary ${location.pathname !== "/" ? "text-lg": 'text-xl'}`}/>
                        </div>
                </div>   
            </div>
    </header>
  )
}

export default Header
