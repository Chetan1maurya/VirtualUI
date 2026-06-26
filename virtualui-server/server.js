import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './configs/connectDB.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import cors from "cors"
import componentRouter from './routes/component.routes.js';
import paymentRouter from './routes/payment.route.js';
dotenv.config()

const app = express()

app.use(cors(
{
    origin: "http://localhost:5173",
    credentials: true
}
))

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.json("hello from server")
})
 
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/component", componentRouter)
app.use("/api/payment", paymentRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB()
})