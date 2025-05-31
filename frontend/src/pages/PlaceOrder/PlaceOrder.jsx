// import React, { useContext, useEffect, useState } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../Context/StoreContext'
// import { assets } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const PlaceOrder = () => {

//     const [payment, setPayment] = useState("cod")
//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         roomNumber: "",  // Add room number or dorm information
//         buildingName: "", // Add building or campus section
//         street: "", // Street could be replaced with "Campus Address" if needed
//         city: "Campus",  // This can be default as "Campus" if needed
//         state: "", // Could be campus specific if needed
//         zipcode: "",
//         country: "India", // Assuming this is for India
//         phone: ""
//     })

//     const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems,currency,deliveryCharge } = useContext(StoreContext);

//     const navigate = useNavigate();

//     const onChangeHandler = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         setData(data => ({ ...data, [name]: value }))
//     }

//     const placeOrder = async (e) => {
//         e.preventDefault()
//         let orderItems = [];
//         food_list.map(((item) => {
//             if (cartItems[item._id] > 0) {
//                 let itemInfo = item;
//                 itemInfo["quantity"] = cartItems[item._id];
//                 orderItems.push(itemInfo)
//             }
//         }))
//         let orderData = {
//             address: data,
//             items: orderItems,
//             amount: getTotalCartAmount() + deliveryCharge,
//         }
//         if (payment === "stripe") {
//             let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
//             if (response.data.success) {
//                 const { session_url } = response.data;
//                 window.location.replace(session_url);
//             }
//             else {
//                 toast.error("Something Went Wrong")
//             }
//         }
//         else{
//             let response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
//             if (response.data.success) {
//                 navigate("/myorders")
//                 toast.success(response.data.message)
//                 setCartItems({});
//             }
//             else {
//                 toast.error("Something Went Wrong")
//             }
//         }

//     }

//     useEffect(() => {
//         if (!token) {
//             toast.error("To place an order, sign in first")
//             navigate('/cart')
//         }
//         else if (getTotalCartAmount() === 0) {
//             navigate('/cart')
//         }
//     }, [token])

//     return (
//         <form onSubmit={placeOrder} className='place-order'>
//             <div className="place-order-left">
//                 <p className='title'>Delivery Information</p>
//                 <div className="multi-field">
//                     <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' required />
//                     <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required />
//                 </div>
//                 <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
//                 <input type="text" name='roomNumber' onChange={onChangeHandler} value={data.roomNumber} placeholder='Room number' required />
//                 <input type="text" name='buildingName' onChange={onChangeHandler} value={data.buildingName} placeholder='Building Name/Dorm Name' required />
//                 <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street or Campus Area' required />
//                 <div className="multi-field">
//                     <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='Campus/City' required />
//                     <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State (if necessary)' required />
//                 </div>
//                 <div className="multi-field">
//                     <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' required />
//                     <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
//                 </div>
//                 <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' required />
//             </div>
//             <div className="place-order-right">
//                 <div className="cart-total">
//                     <h2>Cart Totals</h2>
//                     <div>
//                         <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
//                         <hr />
//                         <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
//                         <hr />
//                         <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b></div>
//                     </div>
//                 </div>
//                 <div className="payment">
//                     <h2>Payment Method</h2>
//                     <div onClick={() => setPayment("cod")} className="payment-option">
//                         <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
//                         <p>COD (Cash on Delivery)</p>
//                     </div>
//                     <div onClick={() => setPayment("stripe")} className="payment-option">
//                         <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
//                         <p>Stripe (Credit / Debit)</p>
//                     </div>
//                 </div>
//                 <button className='place-order-submit' type='submit'>{payment==="cod"?"Place Order":"Proceed To Payment"}</button>
//             </div>
//         </form>
//     )
// }

// export default PlaceOrder




// import React, { useContext, useEffect, useState } from 'react';
// import './PlaceOrder.css';
// import { StoreContext } from '../../Context/StoreContext';
// import { assets } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const PlaceOrder = () => {
//   const [payment, setPayment] = useState("cod");
//   const [productSpecs, setProductSpecs] = useState({});

//   const [data, setData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "India"
//   });

//   const {
//     getTotalCartAmount,
//     token,
//     food_list,
//     cartItems,
//     url,
//     setCartItems,
//     currency,
//     deliveryCharge
//   } = useContext(StoreContext);

//   const navigate = useNavigate();

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSpecChange = (productId, value) => {
//     setProductSpecs(prev => ({ ...prev, [productId]: value }));
//   };

//   const placeOrder = async (e) => {
//     e.preventDefault();

//     let orderItems = [];
//     for (let item of food_list) {
//       if (cartItems[item._id] > 0) {
//         const spec = productSpecs[item._id];
//         if (!spec || spec.trim() === "") {
//           toast.error(`Please enter size/specification for ${item.name}`);
//           return;
//         }

//         let itemInfo = {
//           ...item,
//           quantity: cartItems[item._id],
//           specification: spec
//         };
//         orderItems.push(itemInfo);
//       }
//     }

//     const [firstName, ...lastParts] = data.fullName.trim().split(" ");
//     const lastName = lastParts.join(" ");

//     const address = {
//       firstName,
//       lastName,
//       email: data.email,
//       phone: data.phone,
//       roomNumber: data.addressLine1,
//       buildingName: data.addressLine2,
//       street: "",
//       city: data.city,
//       state: data.state,
//       zipcode: data.zipcode,
//       country: data.country
//     };

//     const orderData = {
//       address,
//       items: orderItems,
//       amount: getTotalCartAmount() + deliveryCharge,
//     };

//     try {
//       if (payment === "stripe") {
//         const response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
//         if (response.data.success) {
//           window.location.replace(response.data.session_url);
//         } else {
//           toast.error("Something Went Wrong");
//         }
//       } else {
//         const response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
//         if (response.data.success) {
//           navigate("/myorders");
//           toast.success(response.data.message);
//           setCartItems({});
//         } else {
//           toast.error("Something Went Wrong");
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong while placing the order.");
//     }
//   };

//   useEffect(() => {
//     if (!token) {
//       toast.error("To place an order, sign in first");
//       navigate('/cart');
//     } else if (getTotalCartAmount() === 0) {
//       navigate('/cart');
//     }
//   }, [token]);

//   return (
//     <form onSubmit={placeOrder} className='place-order'>
//       <div className="place-order-left">
//         <p className='title'>Delivery Information</p>

//         <input type="text" name='fullName' onChange={onChangeHandler} value={data.fullName} placeholder='Full Name' required />
//         <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Mobile Number' required />
//         <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' required />
//         <input type="text" name='addressLine1' onChange={onChangeHandler} value={data.addressLine1} placeholder='Address Line 1 (e.g. Room No, Building)' required />
//         <input type="text" name='addressLine2' onChange={onChangeHandler} value={data.addressLine2} placeholder='Address Line 2 (e.g. Campus Area, Street)' required />

//         <div className="multi-field">
//           <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required />
//           <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required />
//         </div>

//         <div className="multi-field">
//           <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Pin Code' required />
//           <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
//         </div>
//       </div>

//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>{currency}{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
//             </div>
//           </div>
//         </div>

//         <div className="product-specs">
//           <h2>Product Specifications</h2>
//           {food_list.map(item => (
//             cartItems[item._id] > 0 && (
//               <div key={item._id} className="product-spec-item">
//                 <label>{item.name}</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Size or Specification"
//                   value={productSpecs[item._id] || ""}
//                   onChange={(e) => handleSpecChange(item._id, e.target.value)}
//                   required
//                 />
//               </div>
//             )
//           ))}
//         </div>

//         <div className="payment">
//           <h2>Payment Method</h2>
//           <div onClick={() => setPayment("cod")} className="payment-option">
//             <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
//             <p>COD (Cash on Delivery)</p>
//           </div>
//           <div onClick={() => setPayment("stripe")} className="payment-option">
//             <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
//             <p>Stripe (Credit / Debit)</p>
//           </div>
//         </div>

//         <button className='place-order-submit' type='submit'>
//           {payment === "cod" ? "Place Order" : "Proceed To Payment"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;




import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
  const [payment, setPayment] = useState("cod");
  const [productSpecs, setProductSpecs] = useState({});

  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "India"
  });

  const {
    getTotalCartAmount,
    token,
    product_list,
    cartItems,
    url,
    setCartItems,
    currency,
    deliveryCharge
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecChange = (productId, value) => {
    setProductSpecs(prev => ({ ...prev, [productId]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];
    for (let item of product_list) {
      if (cartItems[item._id] > 0) {
        const spec = productSpecs[item._id];
        if (!spec || spec.trim() === "") {
          toast.error(`Please enter size/specification for ${item.name}`);
          return;
        }

        let itemInfo = {
          ...item,
          quantity: cartItems[item._id],
          specification: spec
        };
        orderItems.push(itemInfo);
      }
    }

    const [firstName, ...lastParts] = data.fullName.trim().split(" ");
    const lastName = lastParts.join(" ");

    const address = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      roomNumber: data.addressLine1,
      buildingName: data.addressLine2,
      street: "",
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      country: data.country
    };
    // const userId = 1;
    const orderData = {
      // userId,
      address,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryCharge,
    };

    try {
      if (payment === "stripe") {
        const response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
        if (response.data.success) {
          window.location.replace(response.data.session_url);
        } else {
          toast.error("Something Went Wrong");
        }
      } else {
        const response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
        if (response.data.success) {
          navigate("/myorders");
          toast.success(response.data.message);
          setCartItems({});
        } else {
          toast.error("Something Went Wrong");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while placing the order.");
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("To place an order, sign in first");
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>

        <input type="text" name='fullName' onChange={onChangeHandler} value={data.fullName} placeholder='Full Name' required />
        <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Mobile Number' required />
        <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' required />
        <input type="text" name='addressLine1' onChange={onChangeHandler} value={data.addressLine1} placeholder='Address Line 1 (e.g. Room No, Building)' required />
        <input type="text" name='addressLine2' onChange={onChangeHandler} value={data.addressLine2} placeholder='Address Line 2 (e.g. Campus Area, Street)' required />

        <div className="multi-field">
          <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' required />
          <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' required />
        </div>

        <div className="multi-field">
          <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Pin Code' required />
          <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' required />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
            </div>
          </div>
        </div>

        <div className="product-specs">
          <h2>Product Specifications</h2>
          {product_list.map(item => (
            cartItems[item._id] > 0 && (
              <div key={item._id} className="product-spec-item">
                <label>{item.name}</label>
                <input
                  type="text"
                  placeholder="Enter Size or Specification"
                  value={productSpecs[item._id] || ""}
                  onChange={(e) => handleSpecChange(item._id, e.target.value)}
                  required
                />
              </div>
            )
          ))}
        </div>

        <div className="payment">
          <h2>Payment Method</h2>
          <div onClick={() => setPayment("cod")} className="payment-option">
            <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
            <p>COD (Cash on Delivery)</p>
          </div>
          <div onClick={() => setPayment("stripe")} className="payment-option">
            <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
            <p>Stripe (Credit / Debit)</p>
          </div>
        </div>

        <button className='place-order-submit' type='submit'>
          {payment === "cod" ? "Place Order" : "Proceed To Payment"}
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;