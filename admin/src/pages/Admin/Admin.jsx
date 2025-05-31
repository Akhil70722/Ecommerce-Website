// // src/pages/Admin/Admin.jsx
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faBoxes, faBell } from "@fortawesome/free-solid-svg-icons";
// import "./Admin.css";

// const Admin = () => {
//   return (
//     <div className="admin-page">
//       <h1>Admin Dashboard</h1>
//       <div className="admin-sections">
//         <div className="admin-section" onClick={() => window.location.href = "/customer-profiles"}>
//           <FontAwesomeIcon icon={faUser} size="3x" />
//           <h3>Customer Profiles</h3>
//         </div>
//         {/* <div className="admin-section" onClick={() => window.location.href = "/supplier-management"}>
//           <FontAwesomeIcon icon={faBoxes} size="3x" />
//           <h3>Supplier Management</h3>
//         </div> */}
//         <div className="admin-section" onClick={() => window.location.href = "/restock-alerts"}>
//           <FontAwesomeIcon icon={faBell} size="3x" />
//           <h3>Restock Alerts</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;



// src/pages/Admin/Admin.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBoxes, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-title">Admin Panel</div>
        <nav className="sidebar-menu">
          <a href="/customer-profiles">
            <FontAwesomeIcon icon={faUser} /> Customers
          </a>
          {/* Future feature
          <a href="/supplier-management">
            <FontAwesomeIcon icon={faBoxes} /> Suppliers
          </a>
          */}
          <a href="/restock-alerts">
            <FontAwesomeIcon icon={faBell} /> Restock Alerts
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="navbar">
          <h1>Admin Dashboard</h1>
        </header>

        <div className="cards-container">
          <div className="card" onClick={() => window.location.href = "/customer-profiles"}>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <h3>Customer Profiles</h3>
          </div>

          {/* Future feature
          <div className="card" onClick={() => window.location.href = "/supplier-management"}>
            <FontAwesomeIcon icon={faBoxes} size="2x" />
            <h3>Supplier Management</h3>
          </div>
          */}

          <div className="card" onClick={() => window.location.href = "/restock-alerts"}>
            <FontAwesomeIcon icon={faBell} size="2x" />
            <h3>Restock Alerts</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
