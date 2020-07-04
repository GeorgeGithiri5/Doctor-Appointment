const express = require('express');
const router = express.Router()
const Booking = require('../model/BookingModel')

const BookingValidate = require('../validation/Booking')
const keys = require('../config/keys')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/Book',(req,res)=>{
    const {errors,isValid} = BookingValidate(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }
    const NewBook = new Booking({
        email: req.body.email,
        category:req.body.category,
        description:req.body.description,
        priority: req.body.priority,
        gender: req.body.gender,
        age: req.body.age
    })
    NewBook.save()
            .then(book=>res.json(book))
            .catch(err=>res.json(err))
})

router.get('/:BookId',async(req,res)=>{
    const OneBook = await Booking.findById(req.params.BookId)
    res.json(OneBook)
})

router.get('/',async(req,res)=>{
    const getAll = await Booking.find()
    res.json(getAll)
})

router.delete('/:BookId',async(req,res)=>{
    const DeleteBook = await Booking.remove({_id:req.params.BookId})
    res.json("deleted");
})

router.post('/:id',async(req,res)=>{
    const update = await Booking.findById(req.params.id)
                                .then(booking=>{
                                    email= req.body.email,
                                    category = req.body.category,
                                    description = req.body.description,
                                    priority = req.body.priority,
                                    gender =  req.body.gender,
                                    age =  req.body.age

                                    booking.save()
                                        .then(()=>res.json("Book Updated"))
                                })
                                .catch(err=>res.json(err))
})

module.exports = router