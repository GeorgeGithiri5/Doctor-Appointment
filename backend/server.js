const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const UserRoute = require('./routes/Users')
const BookingRoute = require('./routes/BookingRoute')

const passport = require('passport')
const cors = require('cors')
const app = express()
const db = require('./config/keys').mongoUri

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

mongoose.connect(db,()=>{
    console.log("Connected to the database");
})

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/users',UserRoute)
app.use('/Booking',BookingRoute)

const port = 5000;
 app.listen(port,()=>{
     console.log(`Server listening at Port: ${port}`)
 })