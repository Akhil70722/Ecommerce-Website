// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import validator from "validator";
// import userModel from "../models/userModel.js";

// //create token
// const createToken = (id) => {
//     return jwt.sign({id}, process.env.JWT_SECRET);
// }

// //login user
// const loginUser = async (req,res) => {
//     const {email, password} = req.body;
//     try{
//         const user = await userModel.findOne({email})

//         if(!user){
//             return res.json({success:false,message: "User does not exist"})
//         }

//         const isMatch = await bcrypt.compare(password, user.password)

//         if(!isMatch){
//             return res.json({success:false,message: "Invalid credentials"})
//         }

//         const token = createToken(user._id)
//         res.json({success:true,token})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// //register user
// const registerUser = async (req,res) => {
//     const {name, email, password} = req.body;
//     try{
//         //check if user already exists
//         const exists = await userModel.findOne({email})
//         if(exists){
//             return res.json({success:false,message: "User already exists"})
//         }

//         // validating email format & strong password
//         if(!validator.isEmail(email)){
//             return res.json({success:false,message: "Please enter a valid email"})
//         }
//         if(password.length<8){
//             return res.json({success:false,message: "Please enter a strong password"})
//         }

//         // hashing user password
//         const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
//         const hashedPassword = await bcrypt.hash(password, salt)

//         const newUser = new userModel({name, email, password: hashedPassword})
//         const user = await newUser.save()
//         const token = createToken(user._id)
//         res.json({success:true,token})

//     } catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// //get all users
// const getAllUsers = async (req,res) => {
//     try{
//         const users = await userModel.find({}, "-password")
//         res.json(users)
//     } catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// export {loginUser, registerUser, getAllUsers}


import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

// Create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10); // The more rounds, the stronger (but slower)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({}, "-password");
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { loginUser, registerUser, getAllUsers };
