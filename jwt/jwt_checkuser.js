const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')
const jwt = require('jsonwebtoken');
require('dotenv').config()

function checkUser(req,res,next){
    const token=req.headers.authorization
    const decoded=jwt.decode(token)
    console.log(decoded);
    const name = decoded.name
    db.get('SELECT * FROM users WHERE name=?',[name],(err,data)=>{
      console.log(data)
      if(data.status!="admin"){
        return res.sendStatus(403)
      }
      next()
    })
  }
  module.exports={checkUser}