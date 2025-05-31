// import React, { useContext, useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const LoginPopup = ({ setShowLogin }) => {

//     const { setToken, url,loadCartData } = useContext(StoreContext)
//     const [currState, setCurrState] = useState("Sign Up");

//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name
//         const value = event.target.value    
//         setData(data => ({ ...data, [name]: value }))
//     }

//     const onLogin = async (e) => {
//         e.preventDefault();
    
//         let new_url = url;
//         if (currState === "Login") {
//             new_url += "/api/user/login";
//         } else {
//             new_url += "/api/user/register";
//         }
    
//         try {
//             const response = await axios.post(new_url, data);
    
//             if (response.data.success) {
//                 console.log(response)
//                 // Storing token and user data in localStorage
//                 toast.success(currState === "Sign Up" ? "Account Created Successfully!" : "Login Successful!");
//                 setToken(response.data.token);
//                 localStorage.setItem("token", response.data.token);
//                 localStorage.setItem("user", JSON.stringify(data)); // Store the user data
                
//                 // Optionally, store user data in your context as well (if applicable)
//                 loadCartData({ token: response.data.token });
    
//                 setShowLogin(false); // Close login popup
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.error("Error during login/signup:", error);
//             toast.error("An error occurred. Please try again later.");
//         }
//     };
    

//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2> <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Sign Up" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required /> : <></>}
//                     <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' />
//                     <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//                 </div>
//                 <button>{currState === "Login" ? "Login" : "Create account"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" name="" id="" required/>
//                     <p>By continuing, i agree to the terms of use & privacy policy.</p>
//                 </div>
//                 {currState === "Login"
//                     ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
//                     : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
//                 }
//             </form>
//         </div>
//     )
// }

// export default LoginPopup


// import React, { useContext, useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const LoginPopup = ({ setShowLogin }) => {
//     const { setToken, url, loadCartData } = useContext(StoreContext);
//     const [currState, setCurrState] = useState("Sign Up");

//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const onChangeHandler = (event) => {
//         const { name, value } = event.target;
//         setData(prev => ({ ...prev, [name]: value }));
//     };

//     const onLogin = async (e) => {
//         e.preventDefault();

//         let new_url = url;
//         if (!new_url) {
//             toast.error("Server URL is not defined.");
//             return;
//         }

//         new_url += currState === "Login" ? "/api/user/login" : "/api/user/register";

//         try {
//             const response = await axios.post(new_url, data);

//             if (response.data && response.data.success) {
//                 toast.success(currState === "Sign Up" ? "Account Created Successfully!" : "Login Successful!");
//                 setToken(response.data.token);
//                 localStorage.setItem("token", response.data.token);
//                 localStorage.setItem("user", JSON.stringify(data));
//                 loadCartData({ token: response.data.token });
//                 setShowLogin(false);
//             } else {
//                 toast.error(response.data?.message || "Unexpected response from server.");
//             }
//         } catch (error) {
//             // console.error("Error during login/signup:", error);
//             // toast.error(error.response?.data?.message || "An error occurred. Please try again.");
//             console.error("Error during login/signup:", error.response?.data || error.message);
//             toast.error(error.response?.data?.message || error.message || "An error occurred. Please try again.");
//         }
//     };

//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Sign Up" && (
//                         <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />
//                     )}
//                     <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//                     <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//                 </div>
//                 <button type="submit">{currState === "Login" ? "Login" : "Create account"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                 </div>
//                 {currState === "Login"
//                     ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
//                     : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
//                 }
//             </form>
//         </div>
//     );
// };

// export default LoginPopup;



import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, url, loadCartData } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const onLogin = async (e) => {
        e.preventDefault();

        // Check if URL is defined
        if (!url) {
            toast.error("Server URL is not defined.");
            return;
        }

        // Set the URL based on the current state (Login or Sign Up)
        let new_url = url + (currState === "Login" ? "/api/user/login" : "/api/user/register");

        console.log("API URL: ", new_url); // Log URL to verify

        try {
            const response = await axios.post(new_url, data);

            if (response.data && response.data.success) {
                toast.success(currState === "Sign Up" ? "Account Created Successfully!" : "Login Successful!");
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(data));
                loadCartData({ token: response.data.token });
                setShowLogin(false);
            } else {
                toast.error(response.data?.message || "Unexpected response from server.");
            }
        } catch (error) {
            // Detailed error handling
            console.error("Error during login/signup:", error.response || error.message);
            toast.error(
                error.response?.data?.message || error.message || "An error occurred. Please try again."
            );
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder='Your name'
                            required
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder='Your email'
                        required
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder='Password'
                        required
                    />
                </div>
                <button type="submit">
                    {currState === "Login" ? "Login" : "Create account"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;
