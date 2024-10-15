const jwt = require('jsonwebtoken')
const connectDB = require('../config/db');

exports = function(req, res, next){
    const token = req.header('token')
    if(!token) return res.status(401).send('Access Denied')
  try{
    const verified = jwt.verify(connectDB)
    req.user = verified
    next()
}catch(err){
    res.status(400).send('Invalid Token')
}
}