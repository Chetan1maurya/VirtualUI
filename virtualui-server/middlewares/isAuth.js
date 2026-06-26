
import jwt from 'jsonwebtoken'

const isAuth = async(req,res,next) => {
     try{
        console.log("Cookie is ", req.cookies)
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({
                message:"User does not have token",
                success: false
            })
        }
        let data = await jwt.verify(token,process.env.JWT_SECRET)
        if(!data){
            return res.status(400).json({message:"User does not have valid token"})
        }
        req.userId = data.userId
        next()
     }catch(error){
        return res.status(500).json({
            message:`isAuth Error  ${error}`,
            success: false
        })
     }
}

export default isAuth