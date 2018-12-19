const Joi = require('joi')

require('dotenv').config()

const envVarsSchema = Joi.object({
    SECRET_OR_KEY: Joi.string().description('Secret or key used for hashing').required(),
    MONGO_URL: Joi.string().description('Url for mongo db').required(),
    STEAM_API_KEY: Joi.string().description('Steam api key').required(),
    DOMAIN_NAME: Joi.string().description('Domain name').required()
}).unknown()
    .required()

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema)

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const config = {
    secret: envVars.SECRET_OR_KEY,
    mongoUrl: envVars.MONGO_URL,
    steamKey: envVars.STEAM_API_KEY,
    domainName: envVars.DOMAIN_NAME
}

module.exports = config