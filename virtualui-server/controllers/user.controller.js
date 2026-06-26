import User from "../models/user.model.js"

export const getCurrentUser = async(req,res) => {
    try{
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "User found",
            success: true,
            user
        })
    }catch(error){
        return res.status(500).json({
            message: `Current User server error ${error}`,
            success: false
        })
    }
}

export const getAllUser = async(req, res) => {
    try{
        const users = await User.find().sort({createdAt: -1});
        if(!users){
            return res.status(404).json({message: "Users are not found", success: true})
        }
        return res.status(200).json(users);
    }catch(error){
         return res.status(500).json({
            message: `All user controller server error ${error}`,
            success: false
        })
    }
}

