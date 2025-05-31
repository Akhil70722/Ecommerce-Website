// import { createContext, useEffect, useState } from "react";
// import { food_list, menu_list } from "../assets/assets";
// import axios from "axios";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {

//     const url = "http://localhost:4000"
//     //const url = "https://food-delivery-ml-sales-prediction.onrender.com"
//     const [food_list, setFoodList] = useState([]);
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("")
//     const currency = "₹";
//     const deliveryCharge = 50;

//     const addToCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//         }
//         else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         }
//         if (token) {
//             await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//         }
//     }

//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//         if (token) {
//             await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//         }
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             try {
//               if (cartItems[item] > 0) {
//                 let itemInfo = food_list.find((product) => product._id === item);
//                 totalAmount += itemInfo.price * cartItems[item];
//             }  
//             } catch (error) {
                
//             }
            
//         }
//         return totalAmount;
//     }

//     const fetchFoodList = async () => {
//         const response = await axios.get(url + "/api/food/list");
//         setFoodList(response.data.data)
//     }

//     const loadCartData = async (token) => {
//         const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
//         setCartItems(response.data.cartData);
//     }

//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"))
//                 await loadCartData({ token: localStorage.getItem("token") })
//             }
//         }
//         loadData()
//     }, [])

//     const contextValue = {
//         url,
//         food_list,
//         menu_list,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         token,
//         setToken,
//         loadCartData,
//         setCartItems,
//         currency,
//         deliveryCharge
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )

// }

// export default StoreContextProvider;



// ye wala kaam karta hai
// import { createContext, useEffect, useState } from "react";
// import { food_list as static_food_list, menu_list } from "../assets/assets";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {

//     const url = "http://localhost:4000";
//     const [food_list, setFoodList] = useState([]);
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("");
//     const currency = "₹";
//     const deliveryCharge = 50;

//     const addToCart = async (itemId) => {
//         setCartItems((prev) => {
//             const current = prev || {}; // fallback if prev is undefined
//             if (!current[itemId]) {
//                 return { ...current, [itemId]: 1 };
//             } else {
//                 return { ...current, [itemId]: current[itemId] + 1 };
//             }
//         });

//         if (token) {
//             try {
//                 await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//             } catch (error) {
//                 console.error("Failed to sync addToCart with server:", error);
//             }
//         }
//     };

//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => {
//             const current = { ...prev };
//             if (current[itemId]) {
//                 current[itemId] -= 1;
//                 if (current[itemId] <= 0) {
//                     delete current[itemId];
//                 }
//             }
//             return current;
//         });

//         if (token) {
//             try {
//                 await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//             } catch (error) {
//                 console.error("Failed to sync removeFromCart with server:", error);
//             }
//         }
//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             try {
//                 if (cartItems[item] > 0) {
//                     let itemInfo = food_list.find((product) => product._id === item);
//                     if (itemInfo) {
//                         totalAmount += itemInfo.price * cartItems[item];
//                     }
//                 }
//             } catch (error) {
//                 console.warn(`Error calculating total for item ${item}:`, error);
//             }
//         }
//         return totalAmount;
//     };

//     const fetchFoodList = async () => {
//         try {
//             const response = await axios.get(url + "/api/food/list");
//             setFoodList(response.data.data);
//         } catch (error) {
//             console.error("Failed to fetch food list:", error);
//             setFoodList(static_food_list); // fallback to static list if needed
//         }
//     };

//     const loadCartData = async (token) => {
//         try {
//             const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
//             const data = response.data.cartData;
//             if (data && typeof data === "object") {
//                 setCartItems(data);
//             } else {
//                 setCartItems({});
//             }
//         } catch (error) {
//             console.error("Failed to load cart data:", error);
//             setCartItems({});
//         }
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             const storedToken = localStorage.getItem("token");
//             if (storedToken) {
//                 setToken(storedToken);
//                 await loadCartData({ token: storedToken });
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         url,
//         food_list,
//         menu_list,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         token,
//         setToken,
//         loadCartData,
//         setCartItems,
//         currency,
//         deliveryCharge,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;

//ye wala bhi sahi hai
// import { createContext, useEffect, useState, useCallback } from "react";
// import { product_list as static_product_list, menu_list } from "../assets/assets";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const url = process.env.REACT_APP_API_URL || "http://localhost:4000";
//     const [product_list, setProductList] = useState([]);
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("");
//     const currency = "₹";
//     const deliveryCharge = 50;

//     const addToCart = useCallback(async (productId) => {
//         setCartItems((prev) => {
//             const current = prev || {}; 
//             if (!current[productId]) {
//                 return { ...current, [productId]: 1 };
//             } else {
//                 return { ...current, [productId]: current[productId] + 1 };
//             }
//         });

//         if (token) {
//             try {
//                 await axios.post(url + "/api/cart/add", { productId }, { headers: { token } });
//             } catch (error) {
//                 console.error("Failed to sync addToCart with server:", error);
//             }
//         }
//     }, [token]);

//     const removeFromCart = useCallback(async (productId) => {
//         setCartItems((prev) => {
//             const current = { ...prev };
//             if (current[productId]) {
//                 current[productId] -= 1;
//                 if (current[productId] <= 0) {
//                     delete current[productId];
//                 }
//             }
//             return current;
//         });

//         if (token) {
//             try {
//                 await axios.post(url + "/api/cart/remove", { productId }, { headers: { token } });
//             } catch (error) {
//                 console.error("Failed to sync removeFromCart with server:", error);
//             }
//         }
//     }, [token]);

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const product in cartItems) {
//             try {
//                 if (cartItems[product] > 0) {
//                     let productInfo = product_list.find((item) => item._id === product);
//                     if (productInfo) {
//                         totalAmount += productInfo.price * cartItems[product];
//                     }
//                 }
//             } catch (error) {
//                 console.warn(`Error calculating total for product ${product}:`, error);
//             }
//         }
//         return totalAmount;
//     };

//     const fetchProductList = async () => {
//         try {
//             const response = await axios.get(url + "/api/product/list");
//             setProductList(response.data.data);
//         } catch (error) {
//             console.error("Failed to fetch product list:", error);
//             setProductList(static_product_list); 
//         }
//     };

//     const loadCartData = async (token) => {
//         try {
//             const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
//             const data = response.data.cartData;
//             if (data && typeof data === "object") {
//                 setCartItems(data);
//             } else {
//                 setCartItems({});
//             }
//         } catch (error) {
//             console.error("Failed to load cart data:", error);
//             setCartItems({});
//         }
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchProductList();
//             const storedToken = localStorage.getItem("token");
//             if (storedToken) {
//                 setToken(storedToken);
//                 await loadCartData(storedToken);
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         url,
//         product_list,
//         menu_list,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         token,
//         setToken,
//         loadCartData,
//         setCartItems,
//         currency,
//         deliveryCharge,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;


import { createContext, useEffect, useState, useCallback } from "react";
import { product_list as static_product_list, menu_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = import.meta.env.VITE_API_URL || "http://localhost:4000";
    const [product_list, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = useCallback(async (productId) => {
        setCartItems((prev) => {
            const current = prev || {}; 
            if (!current[productId]) {
                return { ...current, [productId]: 1 };
            } else {
                return { ...current, [productId]: current[productId] + 1 };
            }
        });

        if (token) {
            try {
                await axios.post(url + "/api/cart/add", { productId }, { headers: { token } });
            } catch (error) {
                console.error("Failed to sync addToCart with server:", error);
            }
        }
    }, [token]);

    const removeFromCart = useCallback(async (productId) => {
        setCartItems((prev) => {
            const current = { ...prev };
            if (current[productId]) {
                current[productId] -= 1;
                if (current[productId] <= 0) {
                    delete current[productId];
                }
            }
            return current;
        });

        if (token) {
            try {
                await axios.post(url + "/api/cart/remove", { productId }, { headers: { token } });
            } catch (error) {
                console.error("Failed to sync removeFromCart with server:", error);
            }
        }
    }, [token]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const product in cartItems) {
            try {
                if (cartItems[product] > 0) {
                    let productInfo = product_list.find((item) => item._id === product);
                    if (productInfo) {
                        totalAmount += productInfo.price * cartItems[product];
                    }
                }
            } catch (error) {
                console.warn(`Error calculating total for product ${product}:`, error);
            }
        }
        return totalAmount;
    };

    const fetchProductList = async () => {
        try {
            const response = await axios.get(url + "/api/product/list");
            setProductList(response.data.data);
        } catch (error) {
            console.error("Failed to fetch product list:", error);
            setProductList(static_product_list); 
        }
    };

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            const data = response.data.cartData;
            if (data && typeof data === "object") {
                setCartItems(data);
            } else {
                setCartItems({});
            }
        } catch (error) {
            console.error("Failed to load cart data:", error);
            setCartItems({});
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchProductList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    }, []);

    const contextValue = {
        url,
        product_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;




// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const url = "http://localhost:4000"; // Switch to localhost
//     const [food_list, setFoodList] = useState([]);
//     const [menu_list, setMenuList] = useState([]); // Add this state
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("");
//     const currency = "₹";
//     const deliveryCharge = 50;

//     const addToCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         }

//         if (token) {
//             await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
//         }
//     };

//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (token) {
//             await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
//         }
//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             try {
//                 if (cartItems[item] > 0) {
//                     const itemInfo = food_list.find(product => product._id === item);
//                     totalAmount += itemInfo?.price * cartItems[item];
//                 }
//             } catch (err) {
//                 console.error("Error calculating total:", err);
//             }
//         }
//         return totalAmount;
//     };

//     const fetchFoodList = async () => {
//         const response = await axios.get(`${url}/api/food/list`);
//         setFoodList(response.data.data);
//     };

//     const fetchMenuList = async () => {
//         const response = await axios.get(`${url}/api/menu/list`);
//         setMenuList(response.data.data);
//     };

//     const loadCartData = async (token) => {
//         const response = await axios.post(`${url}/api/cart/get`, {}, { headers: token });
//         setCartItems(response.data.cartData);
//     };

//     useEffect(() => {
//         const loadData = async () => {
//             await fetchFoodList();
//             await fetchMenuList(); // Fetch menu list here
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"));
//                 await loadCartData({ token: localStorage.getItem("token") });
//             }
//         };
//         loadData();
//     }, []);

//     const contextValue = {
//         url,
//         food_list,
//         menu_list, // Now this is dynamic
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         token,
//         setToken,
//         loadCartData,
//         setCartItems,
//         currency,
//         deliveryCharge
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;




// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const url = "http://localhost:4000"; // Local server
//   const [food_list, setFoodList] = useState([]);
//   const [menu_list, setMenuList] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState("");
//   const currency = "₹";
//   const deliveryCharge = 50;

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (token) {
//       await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       try {
//         if (cartItems[item] > 0) {
//           const itemInfo = food_list.find((product) => product._id === item);
//           if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//         }
//       } catch (error) {}
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     const response = await axios.get(url + "/api/food/list");
//     setFoodList(response.data.data);
//   };

//   const fetchMenuList = async () => {
//     const response = await axios.get(url + "/api/food/menu");
//     setMenuList(response.data.data);
//   };

//   const loadCartData = async (token) => {
//     const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
//     setCartItems(response.data.cartData);
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       await fetchMenuList();
//       if (localStorage.getItem("token")) {
//         setToken(localStorage.getItem("token"));
//         await loadCartData({ token: localStorage.getItem("token") });
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     url,
//     food_list,
//     menu_list,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     token,
//     setToken,
//     loadCartData,
//     setCartItems,
//     currency,
//     deliveryCharge
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;




// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const url = "http://localhost:5173"; // Change to your local server URL
//     const [food_list, setFoodList] = useState([]);
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("");
//     const currency = "₹";
//     const deliveryCharge = 50;

//     const addToCart = async (itemId) => {
//         try {
//             if (!cartItems[itemId]) {
//                 setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//             } else {
//                 setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//             }
//             if (token) {
//                 await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//             }
//         } catch (error) {
//             console.error("Error adding item to cart:", error.response?.data || error.message);
//         }
//     };

//     const removeFromCart = async (itemId) => {
//         try {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//             if (token) {
//                 await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//             }
//         } catch (error) {
//             console.error("Error removing item from cart:", error.response?.data || error.message);
//         }
//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             try {
//                 if (cartItems[item] > 0) {
//                     let itemInfo = food_list.find((product) => product._id === item);
//                     totalAmount += itemInfo.price * cartItems[item];
//                 }
//             } catch (error) {
//                 console.error("Error calculating total cart amount:", error.message);
//             }
//         }
//         return totalAmount;
//     };

//     const fetchFoodList = async () => {
//         try {
//             const response = await axios.get(url + "/api/food/list");
//             setFoodList(response.data.data);
//         } catch (error) {
//             console.error("Error fetching food list:", error.response?.data || error.message);
//         }
//     };

//     const loadCartData = async (token) => {
//         try {
//             const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
//             setCartItems(response.data.cartData);
//         } catch (error) {
//             console.error("Error loading cart data:", error.response?.data || error.message);
//         }
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             const savedToken = localStorage.getItem("token");
//             if (savedToken) {
//                 setToken(savedToken);
//                 await loadCartData(savedToken);
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         url,
//         food_list,
//         cartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         token,
//         setToken,
//         loadCartData,
//         setCartItems,
//         currency,
//         deliveryCharge,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;


