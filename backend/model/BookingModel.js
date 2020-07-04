const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Booking',BookingSchema);