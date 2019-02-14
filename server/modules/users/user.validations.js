const Joi = require('joi')

const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ ///(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
module.exports = {
  passwordReg: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),  
  signup: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  },
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required()
  },
}