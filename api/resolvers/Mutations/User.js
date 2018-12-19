const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../config/config')
const getUserId = require('../../config/getUserId') 

function signUp(parent, args, context, info ) {
    const password = await bcrypt.hash(args.password, 10)
    const user = 
}