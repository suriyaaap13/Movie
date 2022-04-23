// Validation
const Joi = require('joi');

// validates the register entry
module.exports.registerValidation = (data)=>{
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
    
        email: Joi.string()
            .min(6)
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}
// validates the login entry
module.exports.loginValidation = (data)=>{
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}