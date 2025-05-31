// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import StoreContextProvider from './Context/StoreContext'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>,
// )


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { StoreContextProvider } from './Context/StoreContext'; // Use named import

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext'; // ✅ default import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
