export default function ValidateInfo(inputValues){
    let Errors = {};

    // Email
    if(!inputValues.email){
        Errors.email = "Email required!"
    }else if(!/\S+@\S+\.\S+/.test(inputValues.email)){
        Errors.email = "Email address is invalid!"
    }

    // Password
    if(!inputValues.password){
        Errors.password = "Password is required"
    }else if(inputValues.password.length < 8) {
        Errors.password = "Password need to be 8 characters or more..."
    }

    
    return Errors;
}