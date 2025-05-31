// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import FoodItem from '../FoodItem/ProductItem'
// import { StoreContext } from '../../Context/StoreContext'

// const FoodDisplay = ({category}) => {

//   const {food_list} = useContext(StoreContext);
//   // console.log(food_list)
//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top Products for You</h2>
//       <div className='food-display-list'>
//         {food_list.map((item)=>{
//           if (category==="All" || category===item.category) {
//             return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
//           }
//         })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay

// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import FoodItem from '../FoodItem/ProductItem';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);

//   // Check if food_list is an array and has data
//   if (!Array.isArray(food_list) || food_list.length === 0) {
//     return <div>Loading food items...</div>; // Fallback loading state
//   }

//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top Products for You</h2>
//       <div className="food-display-list">
//         {food_list.map((item) => {
//           if (category === 'All' || category === item.category) {
//             return (
//               <FoodItem
//                 key={item._id}
//                 image={item.image}
//                 name={item.name}
//                 desc={item.description}
//                 price={item.price}
//                 id={item._id}
//               />
//             );
//           }
//           return null; // Avoid returning undefined if category doesn't match
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;



// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import FoodItem from '../FoodItem/ProductItem';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodDisplay = ({ category }) => {
//   const { food_list, error } = useContext(StoreContext);

//   // If food_list is not available or loading, show loading message or error
//   if (error) {
//     return <div>{error}</div>; // Display error message if there was an issue fetching food items
//   }

//   if (!Array.isArray(food_list) || food_list.length === 0) {
//     return <div>Loading food items...</div>; // Display loading state
//   }

//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top Products for You</h2>
//       <div className="food-display-list">
//         {food_list.map((item) => {
//           if (category === 'All' || category === item.category) {
//             return (
//               <FoodItem
//                 key={item._id}
//                 image={item.image}
//                 name={item.name}
//                 desc={item.description}
//                 price={item.price}
//                 id={item._id}
//               />
//             );
//           }
//           return null; // Avoid rendering if the category does not match
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;




import React, { useContext } from 'react';
import './ProductDisplay.css';
import ProductItem from '../ProductItem/ProductItem'; // Updated to ProductItem
import { StoreContext } from '../../Context/StoreContext';

const ProductDisplay = ({ category }) => {
  const { product_list, error } = useContext(StoreContext); // Changed food_list to product_list
  console.log("prod",product_list); // Debugging line to check product_list
  // If product_list is not available or loading, show loading message or error
  if (error) {
    return <div>{error}</div>; // Display error message if there was an issue fetching product items
  }

  if (!Array.isArray(product_list) || product_list.length === 0) {
    return <div>Loading products...</div>; // Display loading state
  }

  return (
    <div className="product-display" id="product-display"> {/* Updated className */}
      <h2>Top Products for You</h2>
      <div className="product-display-list"> {/* Updated className */}
        {product_list.map((item) => { // Changed food_list to product_list
          if (category === 'All' || category === item.category) {
            return (
              <ProductItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            );
          }
          return null; // Avoid rendering if the category does not match
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
