import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='product-name' >{name}</h4>
                <p><small>By : {seller} </small></p>
                <p>Price : {price}</p>
                <p>Only {stock} left in stock - Order Soon</p>
               
                <button 
                onClick={() => props.handleAddToCart(props.product)}
                className='btn-regular'
                ><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>

            </div>
        </div>
    );
};

export default Product;


