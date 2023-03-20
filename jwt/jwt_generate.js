const jwt = require('jsonwebtoken');
require('dotenv').config()

const  SECRET = process.env.SECRET
function generateAccessToken(name) {
    return jwt.sign({name}, SECRET, { expiresIn: '2 days' });
  }
module.exports={generateAccessToken}