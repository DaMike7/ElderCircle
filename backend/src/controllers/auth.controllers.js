import User from "../models/user.models"
import bcrypt from "bcryptjs"

export const signup = async (req,res) =>{
    const {email,first_name,last_name,nickname,phone_number,password,dob,country,city,ip_address} = req.body
    try{
        //hash pwd
        if (password.length < 8){
            return res.status(400).json({message:"Password must be atleast 8 characters"})
        }
        const userEmail = await User.findOne({email})
        if (userEmail) return res.status(400).json({message:"Email already exists"})
        
        const userNickname = await User.findOne({nickname})
        if (userNickname) return res.status(400).json({message:"Nickname already exists"})

        const userPhoneNumber = await User.findOne({phone_number})
        if (userPhoneNumber) return res.status(400).json({message:"Phone number already exists"})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password.salt)

        const newUser = new User({
            email,
            first_name ,
            last_name ,
            nickname ,
            phone_number ,
            password : hashedPassword,
            dob ,
            country ,
            city ,
            ip_address,
        })
    }catch {error}{

    }
}

export const logout = (req,res) =>{
    res.send('Login route')
}

export const login = (req,res) =>{
    res.send('Logout route')
}