// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './DeliveryDetails.css';

// const DeliveryDetails = () => {
//   const location = useLocation();
//   const { order } = location.state; // Access the passed order data

//   return (
//     <div className='delivery-details'>
//       <h2>Delivery Partner Details</h2>
//       <div className='details-container'>
//         <p>
//           <strong>Order ID:</strong> {order._id}
//         </p>
//         <p>
//           <strong>Partner Name:</strong> {order.deliveryPartner.name || 'N/A'}
//         </p>
//         <p>
//           <strong>Partner Contact:</strong> {order.deliveryPartner.phone || 'N/A'}
//         </p>
//         <p>
//           <strong>Delivery Status:</strong> {order.status}
//         </p>
//         <p>
//           <strong>Estimated Delivery:</strong> {`${order.estimatedDeliveryTime ?? "-"} min` || 'N/A'}
//         </p>
//         <p>
//           <strong>Delivery Address:</strong> {JSON.stringify(order.address)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DeliveryDetails;





// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './DeliveryDetails.css';

// const DeliveryDetails = () => {
//   const location = useLocation();
//   const { order } = location.state; // Access the passed order data

//   // Helper function to format the address nicely
//   const formatAddress = (address) => {
//     return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
//   };

//   return (
//     <div className="delivery-details">
//       <h2>Delivery Partner Details</h2>
//       <div className="details-container">
        
//         {/* Order ID */}
//         <div className="details-card">
//           <strong>Order ID:</strong>
//           <p>{order._id}</p>
//         </div>

//         {/* Partner Name */}
//         <div className="details-card">
//           <strong>Partner Name:</strong>
//           <p>{order.deliveryPartner.name || 'N/A'}</p>
//         </div>

//         {/* Partner Contact */}
//         <div className="details-card">
//           <strong>Partner Contact:</strong>
//           <p>{order.deliveryPartner.phone || 'N/A'}</p>
//         </div>

//         {/* Delivery Status */}
//         <div className="details-card">
//           <strong>Delivery Status:</strong>
//           <p>{order.status}</p>
//         </div>

//         {/* Estimated Delivery Time */}
//         <div className="details-card">
//           <strong>Estimated Delivery:</strong>
//           <p>{order.estimatedDeliveryTime ? `${order.estimatedDeliveryTime} min` : 'N/A'}</p>
//         </div>

//         {/* Delivery Address */}
//         <div className="details-card">
//           <strong>Delivery Address:</strong>
//           <p>{formatAddress(order.address)}</p>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default DeliveryDetails;




import React from 'react';
import { useLocation } from 'react-router-dom';
import './DeliveryDetails.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Import icons for better visuals


const DeliveryDetails = () => {
  const location = useLocation();
  const { order } = location.state; // Access the passed order data

  // Helper function to format the address neatly
  const formatAddress = (address) => {
    return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
  };

  return (
    <div className="delivery-details">
      <h2 className="title">Delivery Partner Details</h2>
      <div className="details-container">

        {/* Order ID Card */}
        <div className="details-card">
          <h3 className="card-title">Order ID</h3>
          <p className="card-info">{order._id}</p>
        </div>

        {/* Partner Name */}
        <div className="details-card">
          <h3 className="card-title">Partner Name</h3>
          <p className="card-info">{order.deliveryPartner.name || 'N/A'}</p>
        </div>

        {/* Partner Contact */}
        <div className="details-card">
          <h3 className="card-title">Partner Contact</h3>
          <p className="card-info"><FaPhoneAlt /> {order.deliveryPartner.phone || 'N/A'}</p>
        </div>

        {/* Delivery Status */}
        <div className="details-card status-card">
          <h3 className="card-title">Delivery Status</h3>
          <p className="status-info">{order.status}</p>
        </div>

        {/* Estimated Delivery Time */}
        <div className="details-card">
          <h3 className="card-title">Estimated Delivery</h3>
          <p className="card-info"><FaClock /> {order.estimatedDeliveryTime ? `${order.estimatedDeliveryTime} min` : 'N/A'}</p>
        </div>

        {/* Delivery Address */}
        <div className="details-card">
          <h3 className="card-title">Delivery Address</h3>
          <p className="card-info"><FaMapMarkerAlt /> {formatAddress(order.address)}</p>
        </div>

      </div>
    </div>
  );
};

export default DeliveryDetails;
