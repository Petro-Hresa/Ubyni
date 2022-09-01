import React, { useState } from 'react';
import Image from 'next/image';
import Svg from '../Images';
import ua from '../../../public/images/static/LangUa.png';
import en from '../../../public/images/static/LangEn.png';
import { TLang } from '../../../store/slice/_lang.s';

const LangUi = (props: TLang) => {

  const [isOpen, setIsOpen] = useState(false)
  const imgLang = {ua, en}

  return (
    <div className="relative cursor-pointer max-md:px-30"  onClick={() => { setIsOpen(!isOpen) }}>
      <div className=" flex items-center">
        <div className="relative w-30 h-20">
          <Image src={imgLang[props.lang as keyof typeof imgLang]} alt='ua' width={30} height={20} className="absolute w-full h-full z-0 rounded-sm" />
        </div>

        <span className={`stroke-white ml-10 ${isOpen && "rotate-90"}`}> 
          <Svg name="arrow" />
        </span>
      </div>
      {isOpen && <ul className="md:absolute w-30 min-w-[50px] bg-white top-[calc(100%+10px)] drop-shadow-md rounded-sm z-10">

        {Object.entries(imgLang).map((item, key) => (
          <li key={key} 
              className="text-center font-semibold text-primary bg-white transition-all p-2 rounded-sm hover:bg-[#f3f3f3]" 
              onClick={() => props.setLang(item[0])}
              >
              {item[0]}
          </li>
        ))
        }

      </ul>}

    </div>
  )
}

export default LangUi;
