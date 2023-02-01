import { AddRounded, RemoveRounded, } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
let cartItems=[];

const CartItem = ({name,imgSrc,price,itemId}) => {
const [qty,setQty]=useState(1); 
const [{cart},dispatch]=useStateValue();
const [itemPrice,seItemPrice]=useState(parseInt(qty)*parseFloat(price));

useEffect(()=>{
  cartItems=cart;
  seItemPrice(parseInt(qty)*parseFloat(price));
},[qty])
const UpdateQuantity=(action,id)=>{
  if(action==="add"){
    setQty(qty+1);
  }
  else{
    if(qty==1){
      cartItems.pop(id);
      dispatch({
        type:actionType.SET_CART,
        cart:cartItems,
      });
    };
    setQty(qty-1);
  }
};
  return (
    <div className='cardItem'>
     <div className='imgBox'>
         <img src={imgSrc} alt=""/>         
     </div> 
     <div className='itemSection'>
            <h2 className='itemName'>{name}</h2>
            <div className='itemQuantity'>
              <span>x {qty}</span>
              <div className='quantity'>
                  <RemoveRounded className='itemRemove' onClick ={()=>
                   UpdateQuantity('remove',itemId) }/>
                  <AddRounded className='itemAdd' onClick={()=>
                  
                  UpdateQuantity('add',itemId)   }/>
                  </div>    
            </div>     
      </div>  
      <p className='itemPrice'>
       <span className='dolorSign'>$ </span> 
       <span className='itemPriceValue'>{itemPrice}</span>          
     </p>          
    </div>
  );
};

export default CartItem;