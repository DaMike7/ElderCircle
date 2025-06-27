import { GenerateToken } from "../lib/utils.js"
import User from "../models/user.models.js"
import bcrypt from "bcryptjs"


//SIGNUP
export const signup = async (req, res) => {
    const {email, first_name, last_name, nickname, phone_number, password, dob, country, city, ip_address} = req.body
    
    try {
        if (!email || !first_name || !last_name || !nickname || !phone_number || !password || !dob || !country || !city || !ip_address) {
            return res.status(400).json({message: "Some Fields Were Left Blank!"})
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({message: "Password must be atleast 8 characters"})
        }

        // Check if email already exists
        const userEmail = await User.findOne({email})
        if (userEmail) return res.status(400).json({message: "Email already exists"})

        // Check if nickname already exists        
        const userNickname = await User.findOne({nickname})
        if (userNickname) return res.status(400).json({message: "Nickname already exists"})

        // Check if phone number already exists
        const userPhoneNumber = await User.findOne({phone_number})
        if (userPhoneNumber) return res.status(400).json({message: "Phone number already exists"})

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        const newUser = new User({
            email,
            first_name,
            last_name,
            nickname,
            phone_number,
            password: hashedPassword,
            dob,
            country,
            city,
            ip_address,
        })

        if (newUser) {
            GenerateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                profile_picture: newUser.profile_picture,
                message: "Success!",
            })
        } else {
            res.status(400).json({message: "Invalid credentials"})
        }
    } catch (error) {
        console.log("Error during signup", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}


//LOGOUT
export const logout = (req,res) =>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})

    } catch (error) {
        console.log("Error in Logout controller!",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

//LOGIN
export const login = async (req,res) =>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json({message:"User not found"})
        }

        const isPwdCorrect = await bcrypt.compare(password,user.password)
        if (!isPwdCorrect){
            return res.status(400).json({message:"Incorrect Password!"})
        }
        GenerateToken(user._id,res)
        res.status(201).json({_id:user._id,first_name:user.first_name,last_name:user.last_name,email:user.email,profile_picture:user.profile_picture,message:"Login successfull"})

    } catch (error){
        console.log("Error in the Login controller ",error.message)
        res.status(500).json({message:"Internal server error"})

    }
}

export const updateProfile = async (req,res) =>{
    
}