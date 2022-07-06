import React from 'react';
import { gif } from '../Images';
const Preloader = () =>{
   return <div className="w-[100px] h-[100px] border"><img src={gif.preloader}/></div>
}

export default Preloader;