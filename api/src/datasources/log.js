const Log = require('../mongoSchemas/Error')

module.exports = class ErrorLogging {
    constructor(){
        
    }
    notFoundError(target, details) {
        const newError = new Log({
            status: "404",
            message: `${target} not found`,
            result: {
                error: details
            }
        })

        newError.save()
    }

}