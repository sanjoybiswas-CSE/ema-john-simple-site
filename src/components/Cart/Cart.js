import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = 15;
    const tax =(total + shipping) * 10;
    const grandTotal = total + shipping + tax;

// OR

    // const totalReducer = (previous, product) => previous + product.price;
    // const total  = cart.reduce(totalReducer, 0);

    
    
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered : {props.cart.length}</h4>
            <br/>
            <p>The Total Price : {total}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p> 
            <p>Grand Total : {grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;