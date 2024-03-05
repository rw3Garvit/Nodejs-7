const Joi = require("joi")

const admin = {
    body: Joi.object().keys({
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(), 
        profile: Joi.string().required().trim(), 
      }),
}


module.exports={admin}