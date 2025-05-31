// import React, { useContext } from 'react'
// import './ExploreMenu.css'
// import { StoreContext } from '../../Context/StoreContext'

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list } = useContext(StoreContext)

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our categories</h1>
//       <p className='explore-menu-text'>
//       Discover a wide range of products tailored to your needs. From the latest tech to fashion essentials, we’ve got everything to enhance your lifestyle.
//       </p>
//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => (
//           <div
//             key={index}
//             className={`explore-menu-list-item ${
//               category === item.menu_name ? 'active' : ''
//             }`}
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? 'All' : item.menu_name
//               )
//             }
//           >
//             <img
//               src={item.menu_image}
//               alt={item.menu_name}
//               className='menu-image'
//             />
//             <p className='menu-name'>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default ExploreMenu





import React, { useContext, useEffect } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, url } = useContext(StoreContext);

  if (!Array.isArray(menu_list) || menu_list.length === 0) {
    return (
      <div className='explore-menu'>
        <h1>Explore our categories</h1>
        <p className='explore-menu-text'>Loading categories...</p>
      </div>
    );
  }
  useEffect(()=>{console.log(menu_list)})
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our categories</h1>
      <p className='explore-menu-text'>
        Discover a wide range of food options. From snacks to meals, explore your cravings.
      </p>

      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div
            key={item._id || index}
            className={`explore-menu-list-item ${
              category === item.menu_name ? 'active' : ''
            }`}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
          >
            <img
              src={
                item.menu_image.startsWith('http')
                  ? item.menu_image
                  : `${item.menu_image}`
              }
              alt={item.menu_name}
              className='menu-image'
              onError={(e) => (e.target.src = '/default-category.png')}
            />
            {/* <img src={item.menu_image}/> */}
            <p className='menu-name'>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;






// import React, { useContext } from 'react';
// import './ExploreMenu.css';
// import { StoreContext } from '../../Context/StoreContext';

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list } = useContext(StoreContext);

//   // Ensure menu_list is an array before calling .map()
//   if (!Array.isArray(menu_list) || menu_list.length === 0) {
//     return <div>Loading categories...</div>; // You can show a loading spinner or fallback message here
//   }

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our categories</h1>
//       <p className='explore-menu-text'>
//         Discover a wide range of products tailored to your needs. From the latest tech to fashion essentials, we’ve got everything to enhance your lifestyle.
//       </p>
//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => (
//           <div
//             key={index}
//             className={`explore-menu-list-item ${
//               category === item.menu_name ? 'active' : ''
//             }`}
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? 'All' : item.menu_name
//               )
//             }
//           >
//             <img
//               src={item.menu_image}
//               alt={item.menu_name}
//               className='menu-image'
//             />
//             <p className='menu-name'>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;




// import React, { useContext } from 'react';
// import './ExploreMenu.css';
// import { StoreContext } from '../../Context/StoreContext';

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list, url } = useContext(StoreContext);

//   console.log('Menu List:', menu_list); // Debug log

//   if (!Array.isArray(menu_list) || menu_list.length === 0) {
//     return (
//       <div className='explore-menu'>
//         <h1>Explore our categories</h1>
//         <p className='explore-menu-text'>Loading categories...</p>
//       </div>
//     );
//   }

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our categories</h1>
//       <p className='explore-menu-text'>
//         Discover a wide range of products tailored to your needs. From the latest tech to fashion essentials, we’ve got everything to enhance your lifestyle.
//       </p>

//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => (
//           <div
//             key={item._id || index}
//             className={`explore-menu-list-item ${
//               category === item.menu_name ? 'active' : ''
//             }`}
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? 'All' : item.menu_name
//               )
//             }
//           >
//             <img
//               src={item.menu_image.startsWith('http') ? item.menu_image : `${url}/images/${item.menu_image}`}
//             
//              alt={item.menu_name}
//               className='menu-image'
//               onError={(e) => (e.target.src = '/default-category.png')}
//             />
//             <p className='menu-name'>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;



// import React, { useContext } from 'react';
// import './ExploreMenu.css';
// import { StoreContext } from '../../Context/StoreContext';

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list, url } = useContext(StoreContext);

//   console.log('Menu List:', menu_list); // Debug log

//   if (!Array.isArray(menu_list) || menu_list.length === 0) {
//     return (
//       <div className='explore-menu'>
//         <h1>Explore our categories</h1>
//         <p className='explore-menu-text'>Loading categories...</p>
//       </div>
//     );
//   }

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our categories</h1>
//       <p className='explore-menu-text'>
//         Discover a wide range of products tailored to your needs. From the latest tech to fashion essentials, we’ve got everything to enhance your lifestyle.
//       </p>

//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => (
//           <div
//             key={item._id || index}
//             className={`explore-menu-list-item ${
//               category === item.menu_name ? 'active' : ''
//             }`}
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? 'All' : item.menu_name
//               )
//             }
//           >
//             <img
//               src={typeof item.menu_image === 'string' && item.menu_image.startsWith('http') 
//                 ? item.menu_image 
//                 : `${url}/images/${item.menu_image || 'default-category.png'}`}
              
//               alt={item.menu_name}
//               className='menu-image'
//               onError={(e) => (e.target.src = '/default-category.png')}
//             />
//             <p className='menu-name'>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;




// import React, { useContext } from 'react';
// import './ExploreMenu.css';
// import { StoreContext } from '../../Context/StoreContext';

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list, url } = useContext(StoreContext);

//   console.log('Menu List:', menu_list);

//   // Fallback if menu_list is not loaded or invalid
//   if (!Array.isArray(menu_list) || menu_list.length === 0) {
//     return (
//       <div className='explore-menu'>
//         <h1>Explore our categories</h1>
//         <p className='explore-menu-text'>Loading categories...</p>
//       </div>
//     );
//   }

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our categories</h1>
//       <p className='explore-menu-text'>
//         Discover a wide range of products tailored to your needs. From the latest tech to fashion essentials, we’ve got everything to enhance your lifestyle.
//       </p>

//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => {
//           const imageUrl =
//             typeof item.menu_image === 'string' && item.menu_image.startsWith('http')
//               ? item.menu_image
//               : `${url}/images/${item.menu_image || 'default-category.png'}`;

//           return (
//             <div
//               key={item._id || index}
//               className={`explore-menu-list-item ${
//                 category === item.menu_name ? 'active' : ''
//               }`}
//               onClick={() =>
//                 setCategory((prev) =>
//                   prev === item.menu_name ? 'All' : item.menu_name
//                 )
//               }
//             >
//               <img
//                 src={imageUrl}
//                 alt={item.menu_name || 'Category'}
//                 className='menu-image'
//                 onError={(e) => {
//                   console.warn('Image load failed for:', imageUrl);
//                   e.target.src = '/default-category.png';
//                 }}
//               />
//               <p className='menu-name'>{item.menu_name || 'Unnamed Category'}</p>
//             </div>
//           );
//         })}
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;
