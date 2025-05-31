// import React, { useState } from 'react';
// import Home from './pages/Home/Home';
// import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cart from './pages/Cart/Cart';
// import LoginPopup from './components/LoginPopup/LoginPopup';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// import MyOrders from './pages/MyOrders/MyOrders';
// import DeliveryDetails from './pages/DeliveryDetails/DeliveryDetails';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Verify from './pages/Verify/Verify';
// import About from './pages/About/About';
// import Delivery from './pages/Delivery/Delivery';
// import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
// import SearchResults from './pages/SearchResults/SearchResults';
// import PromoCode from './components/PromoCode/PromoCode';
// import { ThemeProvider } from './Context/ThemeContext';
// import TermsConditions from './pages/TermsConditions/TermsConditions';
// import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
// import './App.css';
// import HelpAndSupport from './pages/HelpAndSupport';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   // Food items array
//   const foodList = [
//     { id: 1, name: 'Samosa', category: 'College Apparel' },
//     { id: 2, name: 'Vada Pav', category: 'College Apparel' },
//     { id: 3, name: 'Dhokla', category: 'College Apparel' },
//     { id: 4, name: 'Poha', category: 'College Apparel' },
//     { id: 5, name: 'Pav Bhaji', category: 'Uniforms' },
//     { id: 6, name: 'Chole Bhature', category: 'Uniforms' },
//     { id: 7, name: 'Dosa', category: 'Uniforms' },
//     { id: 8, name: 'Pulao', category: 'Uniforms' },
//     { id: 9, name: 'Gulab Jamun', category: 'Desserts' },
//     { id: 10, name: 'Fruit Custard', category: 'Desserts' },
//     { id: 11, name: 'Sooji Halva', category: 'Desserts' },
//     { id: 12, name: 'Vanilla Ice Cream', category: 'Desserts' },
//      { id: 13, name: 'Maggie', category: 'Gadjects' },
//     { id: 14, name: 'Pasta', category: 'Gadjects' },
//     { id: 15, name: 'Grilled Sandwich', category: 'Gadjects' },
//     { id: 16, name: 'Pizza', category: 'Gadjects' },
//     { id: 17, name: 'Tea', category: 'Shoes & Footwear' },
//     { id: 18, name: 'Coffee', category: 'Shoes & Footwear' },
//     { id: 19, name: 'Lemonade', category: 'Shoes & Footwear' },
//     { id: 20, name: 'Milkshake', category: 'Shoes & Footwear' },
//     { id: 21, name: 'Chapati Bhaji', category: 'Academic & Study Essentials' },
//     { id: 22, name: 'Aloo Paratha', category: 'Academic & Study Essentials' },
//     { id: 23, name: 'Paneer Roll', categoary: 'Academic & Study Essentials' },
//     { id: 24, name: 'Rajma Chawal', category: 'Academic & Study Essentials' },
//     { id: 25, name: 'Aloo Tikki', category: 'Accessories' },
//     { id: 26, name: 'Pani Puri', category: 'Accessories' },
//     { id: 27, name: 'Misal Pav', category: 'Accessories' },
//     { id: 28, name: 'Ragda Pattice', category: 'Accessories' },
//     { id: 29, name: 'Dal Makhni', category: 'Stationery & Art Supplies' },
//     { id: 30, name: 'Kadhi Pakora', category: 'Stationery & Art Supplies' },
//     { id: 31, name: 'Kofta', category: 'Stationery & Art Supplies' },
//     { id: 32, name: 'Paneer Lababdar', category: 'Stationery & Art Supplies' },
//   ];

//   return (
//     <ThemeProvider>
//       <ToastContainer />
//       {/* <div className='relative'> */}



//         {showLogin && (
//           <div className="fixed z-50 w-[100vw]">
//             <LoginPopup setShowLogin={setShowLogin} />
//           </div>
//         )}
//         <div className="app relative z-20">
//           <Navbar setShowLogin={setShowLogin} items={foodList} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/order" element={<PlaceOrder />} />
//             <Route path="/myorders" element={<MyOrders />} />
//             <Route path="/myorders/delivery-details/:orderId" element={<DeliveryDetails />} />
//             {/* <Route path="/track-order/:orderId" element={<TrackOrder />} /> */}
//             <Route path="/track-order/:orderId" element={<DeliveryDetails />} />
//             <Route path="/verify" element={<Verify />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/delivery" element={<Delivery />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/search" element={<SearchResults items={foodList} />} />
//             <Route path="/promo-code" element={<PromoCode />} />
//             <Route path="/terms-conditions" element={<TermsConditions />} />
//             <Route path="/cookie-policy" element={<CookiePolicy />} />
//             <Route path="/help" element={<HelpAndSupport />} /> {/* ChatBot route */}
//           </Routes>
//         </div>
//         <Footer />
//       {/* </div> */}
//       {/* {showLogin && <LoginPopup setShowLogin={setShowLogin} />} */}
//     </ThemeProvider>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './Context/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import DeliveryDetails from './pages/DeliveryDetails/DeliveryDetails';
import Verify from './pages/Verify/Verify';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import SearchResults from './pages/SearchResults/SearchResults';
import PromoCode from './components/PromoCode/PromoCode';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import HelpAndSupport from './pages/HelpAndSupport';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  // Product items array
  const productList = [
    // College Apparel
    { id: 1, name: 'College Hoodie', category: 'College Apparel' },
    { id: 2, name: 'College T-Shirt', category: 'College Apparel' },
    { id: 3, name: 'College Jacket', category: 'College Apparel' },
    { id: 4, name: 'College Cap', category: 'College Apparel' },
  
    // Uniforms
    { id: 5, name: 'School Uniform', category: 'Uniforms' },
    { id: 6, name: 'Lab Coat', category: 'Uniforms' },
    { id: 7, name: 'Sports Uniform', category: 'Uniforms' },
    { id: 8, name: 'Blazer Set', category: 'Uniforms' },
  
    // Desserts (renaming to "Casual Wear" to fit better)
    { id: 9, name: 'Casual Shirt', category: 'Casual Wear' },
    { id: 10, name: 'Denim Jeans', category: 'Casual Wear' },
    { id: 11, name: 'Summer Dress', category: 'Casual Wear' },
    { id: 12, name: 'Casual Sneakers', category: 'Casual Wear' },
  
   // Gadjects
   { id: 13, name: 'Winter Jacket', category: 'G' },
   { id: 14, name: 'Raincoat', category: 'Gadjects' },
   { id: 15, name: 'Woolen Scarf', category: 'Gadjects' },
   { id: 16, name: 'Thermal Wear', category: 'Gadjects' },
 
    // Shoes & Footwear
    { id: 17, name: 'Sports Shoes', category: 'Shoes & Footwear' },
    { id: 18, name: 'Leather Boots', category: 'Shoes & Footwear' },
    { id: 19, name: 'Casual Loafers', category: 'Shoes & Footwear' },
    { id: 20, name: 'Flip Flops', category: 'Shoes & Footwear' },
  
   // Bags and Cases
   { id: 21, name: 'Backpack', category: 'Bags and Cases' },
   { id: 22, name: 'Laptop Bag', category: 'Bags and Cases' },
   { id: 23, name: 'Notebook Set', category: 'Bags and Cases' },
   { id: 24, name: 'Stationery Kit', category: 'Bags and Cases' },
 
  
    // Accessories
    { id: 25, name: 'Wrist Watch', category: 'Accessories' },
    { id: 26, name: 'Sunglasses', category: 'Accessories' },
    { id: 27, name: 'Wallet', category: 'Accessories' },
    { id: 28, name: 'Keychains', category: 'Accessories' },
  
    // Stationery & Art Supplies
    { id: 29, name: 'Sketchbook', category: 'Stationery & Art Supplies' },
    { id: 30, name: 'Paint Brushes', category: 'Stationery & Art Supplies' },
    { id: 31, name: 'Canvas Board', category: 'Stationery & Art Supplies' },
    { id: 32, name: 'Color Pencils', category: 'Stationery & Art Supplies' },
  
    // Sports and Gym Wear
    { id: 33, name: 'Running Shoes', category: 'Sports and Gym Wear' },
    { id: 34, name: 'Gym Shorts', category: 'Sports and Gym Wear' },
    { id: 35, name: 'Fitness Tracker', category: 'Sports and Gym Wear' },
    { id: 36, name: 'Sports Jacket', category: 'Sports and Gym Wear' },
  ];
  
  return (
    <ThemeProvider>
      <ToastContainer />
      {showLogin && (
        <div className="fixed z-50 w-[100vw]">
          <LoginPopup setShowLogin={setShowLogin} />
        </div>
      )}
      <div className="app relative z-20">
        <Navbar setShowLogin={setShowLogin} items={productList} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myorders/delivery-details/:orderId" element={<DeliveryDetails />} />
          <Route path="/track-order/:orderId" element={<DeliveryDetails />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/search" element={<SearchResults items={productList} />} />
          <Route path="/promo-code" element={<PromoCode />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/help" element={<HelpAndSupport />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
