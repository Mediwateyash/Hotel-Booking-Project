const Hotel = require ('./database.js')

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/hotel") 

const express = require ('express')
const app = express()
app.use (express.json())


//post the data
app.post('/posthotel',async(req,res)=>{
    try{
const hotel = new Hotel(req.body)

const result = await hotel.save()
res.send(result)
    }catch (e){
        console.log("Could not post the data.");
    }
})


app.listen(3000,()=>{                                       
    console.log("Server is up and running at port 3000.")
})

