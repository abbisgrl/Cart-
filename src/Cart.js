import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor (){
        super();
        this.state ={
        products:[ 
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

    //function for increasing the qty value
    handleIncreaseQty =(product)=>{
        console.log('Increase the qty of product',product)
        const{products} =this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products: products
        })
    }

    //function for decreasing the qty value
    handleDecreaseQty =(product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;

        this.setState({
            products:products
        })
    }
    handleDeleteItem=(id)=>{
        const {products}=this.state;
        const item = products.filter((item)=>item.id!==id);
        this.setState({
            products:item
        })
    }
 render(){
     const {products} = this.state;

     return(
         <div className="cart"> 
         {/* this is called prop which is similar to the arguments in function */}
             {products.map((product)=>{
                  return (
                  <CartItem 
                   product={product}
                   key={product.id}
                   onClickIncreaseQty = {this.handleIncreaseQty}
                   onClickDecreaseQty = {this.handleDecreaseQty}
                   onClickDeleteItem = {this.handleDeleteItem}
                   />
                  )
                })}
         </div>
     )
 }
}
export default Cart;