import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// components
import Svg from '../Images';
import ua from '../../../public/images/static/LangUa.png';
import en from '../../../public/images/static/LangEn.png';
import { TLang } from '../../../store/slice/_lang.s';



const LangUi = (props: TLang) => {

  const [isOpen, setIsOpen] = useState(false)
  const langListRef = useRef<any>(null)
  const langRef = useRef<any>(null)
  const imgLang = { ua, en }

  useEffect(() => {
 
    document.addEventListener('mousedown', (e) => {
      if (!langRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    })

  },[])

  return (
    <div ref={langRef} className="relative cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
      <div className=" flex items-center md:py-30 max-md:py-15">
        <div className="w-30 h-20">
          <Image src={imgLang[props.lang as keyof typeof imgLang]} alt={props.lang} width={30} height={20} className="rounded-sm" />
        </div>

        <span className={`stroke-white ml-10 ${isOpen && "rotate-90"}`}>
          <Svg name="arrow" />
        </span>
      </div>

      {isOpen && <ul ref={langListRef} className="absolute w-30 min-w-[50px] bg-white top-[calc(100%-5px)] md:top-[calc(100%-20px)] drop-shadow-md rounded-sm z-10">

       {Object.entries(imgLang).map((item, key) => (
         props.lang != item[0] && <li key={key}
            className="text-center font-semibold text-primary bg-white transition-all p-2 rounded-sm hover:bg-[#f3f3f3]"
            onClick={() => {props.setLang(item[0])}}
            >
            {item[0]}
          </li>
        ))}

      </ul>}

    </div>
  )
}

export default LangUi;
