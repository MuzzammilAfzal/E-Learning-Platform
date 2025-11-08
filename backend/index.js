

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

import userRouter from "./router/user.js";
import aiRouter from "./router/ai.js";



const app = express();
const port = 3000;

dotenv.config()

app.use(cors({origin:"*",
    methods:["GET","POST","PUT","DELETE"],credentials:true
}))

app.use(express.json());
app.use('/user',userRouter) 
app.use('/ai',aiRouter)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.MONGO_URL, {  dbName: "E-Learning-Platform" })
