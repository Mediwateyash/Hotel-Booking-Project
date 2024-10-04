const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/hotel")

const hotel = mongoose.model("hotel",{
hotel_name:{
    type:String
},

description:{
    type:String
},

price:{
    type:Number
},
Address :{
    type:String
},

image:[],
currentbooking:{
    type:String
},

types:{
    type:String
    },
roomdescription:{
        type:String
    }

})

const roommodel = mongoose.model('rooms',roomschema)



module.exports = hotel