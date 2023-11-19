const express=require("express")
const {connection}=require("./src/config/dbConnection")
const router=require("./src/routes/logRoutes")
const userRoutes = require('./src/routes/userRoutes');

require("dotenv").config()
const PORT=process.env.PORT || 3000;

const app=express()
app.use(express.json())

app.use("/logs",router)
app.use('/users', userRoutes);

app.get("/",async(req,res)=>{
    try{
        res.send({message:"HOME PAGE"})
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){       
        console.log(err)
        console.log("Error in connecting to db")
    }
   console.log(`Server is running at Port ==> ${PORT}`)
})