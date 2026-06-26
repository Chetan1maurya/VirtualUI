import { genToken } from "../configs/token.js";
import User from "../models/user.model.js"

export const googleAuth = async(req,res) => {
    try{
        const {name, email} = req.body
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({
                name,email
            })
        }
        let token = await genToken(user._id);
        res.cookie("token", token,{
            httpOnly: false,
            secure: true,
            sameSite: "none",
            maxAge: 7*24*60*60*1000
        })
        return res.status(200).json({
            message:"User Authenticated",
            success: true,
            user
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Authentication Failed",  
            success: false
        })
    }
}

export const logout = async(req,res) => {
    try{
        await res.clearCookie("token",{
            httpOnly: false,
            secure: true,
            sameSite: "none"
        })
        return res.status(200).json({
            message: "Logged out successfully",
            success: true
        })
    }catch(error){
        return res.status(500).json({
            message: "Failed to logout user",
            success: false
        })
    }
}
