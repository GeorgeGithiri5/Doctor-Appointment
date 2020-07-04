const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function RegisterInput(data){
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name: ""
    data.email = !isEmpty(data.email) ? data.email: ""
    data.password = !isEmpty(data.password) ? data.password: ""
    data.password2 = !isEmpty(data.password2) ? data.password2: ""

    // name check 
    if(Validator.isEmpty(data.name)){
        errors.name = "Name is required"
    }
    // Email Check
    if(Validator.isEmpty(data.email)){
        errors.email = "email is required"
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }

    // Passwords Check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password is required"
    }

    // Password length
    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password = "Password must have atleast 6 characters"
    }
    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "You have to confirm Password"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
 }