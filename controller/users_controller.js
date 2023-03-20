const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')
const CryptoJS = require('crypto-js');
const generateAccessToken = require('../jwt/jwt_generate')

function register(req, res) {
  const name = req.body.name
  const password = req.body.password
  const phone=req.body.phone
  const hashed_password = CryptoJS.SHA256(password).toString();
  const sql = "INSERT INTO users (name, password, phone) VALUES (?, ?, ?)"
  db.run(sql, [name,hashed_password,phone], function(err){
        if(err){
            res.send(JSON.stringify({status: "Error Registering"}))
        }
        res.send(JSON.stringify({status: "User Created"}))
    })
}

function login (req, res) {
  const name = req.body.name
  const password = req.body.password
  const hashed_password = CryptoJS.SHA256(password).toString();
 const  token = generateAccessToken.generateAccessToken(name)
  console.log(token)
  const sql = "SELECT * from users WHERE name = ?"
  db.get(sql,[name], function(err, row){
      console.log(row);
    if(name == row.name && hashed_password == row.password) {
      //  const user_id = this.lastID;
      //       create_cart_for_user(user_id,res);
        res.send(JSON.stringify({status: "Logged in",jwt:token}));
    }else {
        res.send(JSON.stringify({status: "Wrong credentials"}));
    }
  }) 
}
module.exports={register, login}