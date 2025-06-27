import jwt from "jsonwebtoken"
import User from "../models/user.models"

export const protectRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if (!token){
            return res.status(400).json({message:"Unauthorized!"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(400)({message:"Unauthorized"})
        }

        const user = await User.findById(decoded.userId).select("-password")

        req.user = user
        next()
    } catch (error) {
        console.log("Error in Middleware!",error.message)
        return res.status(500).json({mesaage:'Internal server error'})

    }

}