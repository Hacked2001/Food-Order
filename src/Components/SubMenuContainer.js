import { ChevronLeftRounded } from '@mui/icons-material';
import React from 'react';

const SubMenuContainer = ( {name}) => {
  return (
   <div className='subMenuContainer'>
     <h3> { name }</h3>  
     <div className="viewAll">
         <p> View All</p>
         <i> <ChevronLeftRounded/></i>         
     </div>           

   </div>
  )
}

export default SubMenuContainer;