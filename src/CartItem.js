import React from "react";

class CartItem extends React.Component{
    
   /* increaseQuantity=()=>{ 
        // console.log('this',this.state);

        //setting setState form no 1 if we are not require prev form 
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //setting the setState form no 2 if we require prev state then we will use this form 
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            } 
        },()=>{
            console.log(this.state.qty);
        })


    }
    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty===0){
            return;
        }
        
        //setting of form 2 for decreasing of the quantity
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }*/


    render(){
        console.log('this.props',this.props);
        const {price,title,qty} = this.props.product;
        const{
            product,
            onClickIncreaseQty,
            onClickDecreaseQty,
            onClickDeleteItem
        }=this.props
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{fontSize:25}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase"
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={()=>onClickIncreaseQty(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={()=>onClickDecreaseQty(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>onClickDeleteItem (product.id)}
                        />

                    </div>
                </div>

            </div>
        )
       
    }

}
const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;