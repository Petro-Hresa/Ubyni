import React, { useRef, useState, useCallback, useEffect, FC } from "react";
import Img,{Svg} from "../Images/_Images";
import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../data/redux/store";
// import { setLanguage } from '../../data/redux/slices/languageSlice';
// import { translation } from "../../data/locales/languages/languages";

import img from '../../../public/images/LangEn.png'
import { TLang } from "./_Lang";
type TImgLang = {
   ua: any,
   en: any
}

 const LangUi = React.memo((props:TLang) => {

   const box = useRef(null);
   const [isOpen, setIsOpen] = useState(false)

   let imgLang: TImgLang = {
      ua: Img.lang.ua,
      en: Img.lang.en
   }

   return (

         <div className=" flex items-center relative cursor-pointer max-md:px-30" onClick={() => { setIsOpen(!isOpen) }}>

            <div className="relative w-30 h-20">
               <Image src={imgLang[props.lang as keyof typeof imgLang]} alt={props.lang} width={30} height={20} className="absolute w-full h-full z-0 rounded-sm" />
               {/* <Image src={img} alt={props.lang} width={30} height={20} className="absolute w-full h-full z-0 rounded-sm" /> */}
            </div>
            <span className={`stroke-white ml-10 ${isOpen ? "rotate-90" : ""}`}>
               <Svg name="arrow" />
            </span>

            {isOpen && <ul ref={box} className="absolute w-30 min-w-[50px] bg-white top-[calc(100%+10px)] drop-shadow-md rounded-sm z-10">

               {Object.entries(imgLang).map((item, key) => (
                  
                 <li key={key} 
                     className="text-center font-semibold text-primary bg-white transition-all p-2 rounded-sm hover:bg-[#f3f3f3]" 
                     onClick={() => {props.setLang(item[0])}}>
                  {item[0]}</li>
               ))
               }

            </ul>}

         </div>

   );
})

export default LangUi;