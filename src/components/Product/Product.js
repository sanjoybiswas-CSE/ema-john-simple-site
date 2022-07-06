import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
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
                
                className='btn-regular'
                >Add To Cart</button>

            </div>
        </div>
    );
};

export default Product;
// import React from 'react';
// import './Product.css'
// const Product = (props) => {
//     const { name, img, seller, price, stock } = props.product;
//     return (
//         <div className='product'>
//             <div>
//                 <img src={img} alt="" />
//             </div>
//             <div>
//                 <h3 className='product-name'>{name}</h3>
//                 <p><small>By : {seller} </small></p>
//                 <p>Price : {price}</p>
//                 <p>Only {stock} left in stock - Order Soon</p>
//             </div>
//         </div>
//     );
// };

// export default Product;