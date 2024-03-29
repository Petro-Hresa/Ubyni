// import React from 'react';

import ua from '../../../public/images/static/LangUa.png';
import en from '../../../public/images/static/LangEn.png';

type TSvg ={
    name: string;
}

const Svg = (props : TSvg) => {
        let icons  = {
            emblem: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 663 1092.6" fill="current" stroke="current">
                        <path d="M443.2,88.9c-15.6,15.8-30.5,45.3-35.6,70.1-3.3,16.1-3.9,26-3.3,53.5.9,39.5,5.1,162.3,8.8,259,2.9,76.2-4.6,138-22.8,188.5-6.9,19-12.6,30.4-18.6,37.4-15.8,18.1-32.3,43.1-43.5,65.8-19.6,39.9-29.9,81.8-31.8,129.4l-.7,16.4,29.4-.2,29.4-.3.6-15c.8-17,5.4-48.8,9.8-67A251.25,251.25,0,0,1,407.6,735c8.4-11.2,29.8-33.3,37.7-38.8l4.8-3.4,11.6,11.4c37.7,37,64,83.1,74.7,130.9,3.5,15.9,7.6,46,8.3,61.2l.6,12.7,29.1-.2,29.1-.3-.3-13a312.15,312.15,0,0,0-23.6-113c-11.6-27.9-32-61-51.5-83.4-3-3.5-6.3-8.5-7.3-11s-3.5-9-5.7-14.4c-12.8-31.1-22.3-70.2-26.5-109.7-3.9-36.1-4.4-65.8-2.1-121.5.8-19.8,2.4-63.7,3.5-97.5s2.7-81.7,3.6-106.4c1.7-48.7,1.2-61-2.7-79.5-5.7-26.2-19-52.6-35-69.5l-6.6-6.9Z" transform="translate(-118.5 -81.98)"/>
                        <path d="M119,587V981H301.7l2.8,10.7c8.8,34.1,25.7,68.6,47.7,97.6,23,30.3,56.2,60,88,79l9.6,5.7,10.2-5.8c33.5-19.3,65.5-47.9,89.8-80.5,11.4-15.1,18.2-26.5,26.8-44.2,8.9-18.4,13.3-30.2,18.1-48.5l3.6-14H781V193h-2c-6.4,0-36.2,20.4-58.8,40.4-33.6,29.6-64.7,71.5-84.7,114-18.9,40.1-31.2,86.3-35.9,135.1-4.7,47.4-6,59.7-9.6,89-3.9,32-7.4,62.5-10.8,95.6l-1.8,17.7,11.1.4c12.5.5,18.6,2.3,28.7,8.4,19.9,12.1,30.8,32.7,27.8,52.1-2.7,17.1-14.4,30.9-36.8,43.3-2.3,1.3-4,2.9-3.8,3.4,2.8,6.5,10.2,33.8,12.7,46.3.6,3.5,1.5,6.3,1.9,6.3,1.6,0,18.8-7.3,24-10.2,23.7-13.4,40.4-31.8,49.7-54.8,6.1-14.9,7.7-23.8,7.8-42,0-19.9-1.7-27.6-9.9-44.5-9.3-19.1-21.9-33.3-39.9-45.2-7.4-4.9-10.3-7.4-11.3-9.9-1.3-3-.9-7.3,3.6-43.6,5.1-41.4,8.7-74.2,11.5-102.3.8-8.8,2.5-21.6,3.6-28.5,6.3-39.5,22.7-85.4,42.2-118,7-11.7,23.5-37,24.2-37,.3,0,.5,139.9.5,311V931H500v50h18.3c10.1,0,18.6.3,18.9.6.9.9-4.8,21.3-9.2,33.1a227.58,227.58,0,0,1-37.8,64.3c-4.4,5.2-8.9,10.4-10.1,11.4l-2.1,1.9.2-86.9.3-86.9,3.4-6.9c6.3-12.9,20.5-23.9,37.4-29.2,4.6-1.4,5.7-2.2,5.7-3.9,0-7.8-6.4-46.1-8-47.9-1-1-12.5,2.7-20.1,6.5s-24.1,15-36.7,24.8L449.9,870l-11.7-9.2C425,850.5,411.1,841.1,403,837c-7.6-3.8-19-7.4-20-6.4-1.6,1.7-8.8,44.3-8.2,49.1,0,.3,3.5,1.9,7.7,3.4,17.5,6.4,29.5,16,35.6,28.5l3.4,6.9.2,86.5.3,86.5-6.6-6.8c-12-12.5-25.8-32.6-34.8-50.5-7.6-15.2-19.7-50.8-17.8-52.6.3-.3,8.8-.6,18.9-.6H400V931H175V620c0-171.1.2-311,.4-311,.6,0,17.1,25.6,24.6,38,14.1,23.3,28.2,58.4,36,89.5,4.5,17.9,7.6,38.5,11,72.5,1.7,16.8,5.3,48.9,8.1,71.5s5.3,44.8,5.5,49.5c.6,10.3.6,10.3-12.6,19.1-33.6,22.3-53.3,61.7-49,98.1,5.3,45.9,30.4,78.1,73.8,94.8a85.94,85.94,0,0,0,8.2,3c.3,0,1.2-3.5,1.9-7.8,1.5-9,7.1-31.1,10.1-39.6,1.1-3.3,2-6,2-6.2s-3.7-2.5-8.2-5.3c-23.5-14.2-32.5-27.5-32.2-47.6.2-14.9,5.3-25.6,16.9-36.3,13-11.8,23.5-16.3,39.8-17,9.7-.4,10.7-.6,10.7-2.3,0-3.9-7.2-69.3-11.5-104.9-5.5-45.6-7.1-59.8-9-82.5-3.8-42.9-9.7-73.3-21-107C256,314.9,211,253.5,149.2,209.3,137,200.6,124.1,193,121.3,193H119Z" transform="translate(-118.5 -81.98)"/>
                    </svg>,
            
            arrow: <svg width="13" height="8" viewBox="0 0 13 8" fill="none" stroke="current" strokeWidth="3" strokeLinecap="round">
                        <path d="M1 1.5L6.5 6L12 1.5" />
                    </svg>,

            arrow2: <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.5L15 3.5L12 6.5" stroke="current" strokeLinecap="round"/>
                    <line x1="0.5" y1="3.5" x2="14.5" y2="3.5" stroke="current" strokeLinecap="round"/>
                    </svg>,
            // location:                
        }
       
  return(
      <>
        {icons[props.name as keyof typeof icons]}
     </>

  )

};
 
export default Svg;

export const Img = {
    lang:{ua, en},

  
    // news: {
    //     news1: require('../../../public/images/News1.jpg'),
    //     news2: require('../../../public/images/News2.jpg'),
    //     news3: require('../../../public/images/News3.jpg'),
    //     news4: require('../../../public/images/News4.jpg'),
    //     news5: require('../../../public/images/News5.jpg'),
    //     news6: require('../../../public/images/map.jpg'),
    // },

    // map: require('../assets/images/map.jpg'),
    // church: require('../assets/images/church.jpg'),

    // Users:{
    //     "default-user": require('../../../public/images/users/default-user.png'),
    //     "user-01": require('../../../public/images/users/user-01.jpg'),
    //     "user-02": require('../../../public/images/users/user-02.jpg'),
    // }

};


 

// export const gif = {
//     preloader: require('../../../public/images/spinner.gif'),
// }