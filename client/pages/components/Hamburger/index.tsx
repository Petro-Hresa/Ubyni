import React, {useState} from 'react';
type TBurger = {
    onClick : () => void
}
export const Hamburger =() => {

    return (

        <div className="space-y-10 cursor-pointer lg:hidden" >
            <div className='w-20 h-2 bg-white'></div>
            <div className='w-25 h-2 bg-white'></div>
            <div className='w-30 h-2 bg-white'></div>
        </div> 

    );
}

