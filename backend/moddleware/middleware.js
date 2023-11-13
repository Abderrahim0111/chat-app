const User = require("../models/userSchema")
var jwt = require("jsonwebtoken");

const isUser = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
            if (err) {
                console.log("not a user")
                next()
            }else{
                const user = await User.findOne({_id: decoded.id})
                console.log(`${user.name} is a user`)
                next()
            }
        })
    }else{
        console.log('not a user')
        next()
    }
} 

module.exports = isUser