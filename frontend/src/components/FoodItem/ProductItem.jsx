// src/components/ProductItem/ProductItem.jsx
import React, { useContext, useState } from 'react';
import './ProductItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const ProductItem = ({ image, name, price, desc, id }) => {

    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

    return (
        <div className='product-item'>
            <div className='product-item-img-container'>
                <img className='product-item-image' src={url + "/images/" + image} alt={name} />
                
                {!cartItems[id] ? (
                    <img 
                        className='add-button' 
                        onClick={() => addToCart(id)} 
                        src={assets.add_icon_white} 
                        alt="Add to Cart" 
                    />
                ) : (
                    <div className="product-item-counter">
                        <img 
                            src={assets.remove_icon_red} 
                            onClick={() => removeFromCart(id)} 
                            alt="Remove from Cart" 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            src={assets.add_icon_green} 
                            onClick={() => addToCart(id)} 
                            alt="Add More" 
                        />
                    </div>
                )}
            </div>
            
            <div className="product-item-info">
                <div className="product-item-name">
                    <p>{name}</p>
                </div>
                <p className="product-item-desc">{desc}</p>
                <p className="product-item-price">{currency}{price}</p>
            </div>
        </div>
    );
}

export default ProductItem;






// import React, { useContext } from 'react';
// import './ProductItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';

// const ProductItem = ({ image, name, price, desc, id }) => {
//     const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

//     return (
//         <div className='product-item'>
//             <div className='product-item-img-container'>
//                 <img 
//                     className='product-item-image' 
//                     src={image ? `${url}/images/${image}` : '/default-image.jpg'} 
//                     alt={name} 
//                 />
                
//                 {!cartItems[id] ? (
//                     <img 
//                         className='add-button' 
//                         onClick={() => addToCart(id)} 
//                         src={assets.add_icon_white} 
//                         alt="Add to Cart" 
//                     />
//                 ) : (
//                     <div className="product-item-counter">
//                         <img 
//                             src={assets.remove_icon_red} 
//                             onClick={() => removeFromCart(id)} 
//                             alt="Remove from Cart" 
//                         />
//                         <p>{cartItems[id]}</p>
//                         <img 
//                             src={assets.add_icon_green} 
//                             onClick={() => addToCart(id)} 
//                             alt="Add More" 
//                         />
//                     </div>
//                 )}
//             </div>
            
//             <div className="product-item-info">
//                 <div className="product-item-name">
//                     <p>{name}</p>
//                 </div>
//                 <p className="product-item-desc">{desc}</p>
//                 <p className="product-item-price">{currency}{price}</p>
//             </div>
//         </div>
//     );
// }

// export default ProductItem;



// src/components/ProductItem/ProductItem.jsx
// import React, { useContext } from 'react';
// import './ProductItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';

// const ProductItem = ({ image, name, price, desc, id }) => {
//     const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

//     return (
//         <div className='product-item'>
//             <div className='product-item-img-container'>
//                 <img 
//                     className='product-item-image' 
//                     src={image ? `${url}/images/${image}` : '/default-image.jpg'} 
//                     alt={name || 'Product'} 
//                 />
                
//                 {cartItems && cartItems[id] ? (
//                     <div className="product-item-counter">
//                         <img 
//                             src={assets.remove_icon_red} 
//                             onClick={() => removeFromCart(id)} 
//                             alt="Remove from Cart" 
//                         />
//                         <p>{cartItems[id]}</p>
//                         <img 
//                             src={assets.add_icon_green} 
//                             onClick={() => addToCart(id)} 
//                             alt="Add More" 
//                         />
//                     </div>
//                 ) : (
//                     <img 
//                         className='add-button' 
//                         onClick={() => addToCart(id)} 
//                         src={assets.add_icon_white} 
//                         alt="Add to Cart" 
//                     />
//                 )}
//             </div>
            
//             <div className="product-item-info">
//                 <div className="product-item-name">
//                     <p>{name || 'No Name'}</p>
//                 </div>
//                 <p className="product-item-desc">{desc || 'No description available'}</p>
//                 <p className="product-item-price">{currency}{price || '0.00'}</p>
//             </div>
//         </div>
//     );
// }

// export default ProductItem;
