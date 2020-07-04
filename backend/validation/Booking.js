const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function BookingValidate(data){
    let errors = {}

    data.email = !isEmpty(data.email)? data.email: "";
    data.category = !isEmpty(data.category)? data.category: "";
    data.description = !isEmpty(data.description)? data.description: "";
    data.gender = !isEmpty(data.gender)? data.gender: "";
    data.age = !isEmpty(data.age)? data.age: "";

    // Email Validate
    if(Validator.isEmpty(data.email)){
        errors.email = "Email is required"
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email Invalid"
    }
    // Description Validate
    if(Validator.isEmpty(data.description)){
        errors.description = "You Must describe Your Condition"
    }

    // Length Description
    if(!Validator.isLength(data.description,{min: 20,max:300})){
        errors.description = "Your Descrition Must Between 20 and 300 words"
    }

    // Gender Validate
    if(Validator.isEmpty(data.gender)){
        errors.gender = "Gender is Required"
    }

    // Age validate
    if(Validator.isEmpty(data.age)){
        errors.age = "Your Age Is Required"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}