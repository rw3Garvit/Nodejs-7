const Joi = require("joi")

const school = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        shortCode: Joi.string().required().trim(), 
        admin: Joi.string().required().trim(), 
      }),
}


module.exports={school}