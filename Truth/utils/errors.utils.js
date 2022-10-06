 module.exports.signUpErrors = (err) => {
    let errors = { Username:'', email:'', password:''}
    if (err.message.includes('Username')) 
        errors.Username = "Invalid Username"
    if (err.message.includes('password')) 
        errors.password = "Invalid password"
    if (err.message.includes('email')) 
        errors.email = "Invalid email"
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('Username')) 
        errors.Username = "Username already exist";
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) 
        errors.email = "email already exist";

    return errors;
};

module.exports.signInErrors = (err) =>{
    let errors = { email:'', password:''}
    if (err.message.includes('email')) 
        errors.email = "Uknown email";
    if (err.message.includes('password')) 
        errors.password = "Invalid password";
    
    return errors;

};