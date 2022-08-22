import React, { useState } from 'react';
import { TBesides } from '../../../store/slice/Besides.s';


const BesidesUi = (props:TBesides) => {

  const lines = [1,2,3]
  return (
   <div 
      className="border-2 h-6 border-secondary rounded-[5px] p-1 md:hidden" 
      onClick={(e)=> {
        props.getStatus(!props.isOpen)
        // props.getEvent()
          
      }}>

      {lines.map((x , i)=> <div key={i} className='bg-secondary w-0.5 h-0.5'></div>)}
   </div>
  )
};  

export default BesidesUi;
 