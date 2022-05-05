import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor (){
        super();
        this.state ={
        product:[ 
        {
            price:9000,
            title:'Phone',
            qty:1,
            img:'',
            id:1
        },
        {
            price:900,
            title:'Watch',
            qty:10,
            img:'',
            id:2
        },
        {
            price:900,
            title:'laptop',
            qty:1,
            img:'',
            id:3
        }   
            ]
        }
    }
 render(){
     const {product} = this.state;
     return(
         <div className="cart"> 
         {/* this is called prop which is similar to the arguments in function */}
             {product.map((product)=>{
                  return (
                  <CartItem product={product}
                   key={product.id}/>
                  )
                })}
         </div>
     )
 }
}
export default Cart;