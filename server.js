const express = require('express')
const app = express()
const port = 5000
const sqlite3 = require('sqlite3').verbose()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const CryptoJS = require('crypto-js');
const users_schema = require('./models/users_schema')
const product_schema = require('./models/products_schema')
const card_schema = require('./models/card_schema')
const users_routes = require('./routes/users_routes')
const products_routes=require('./routes/products_routes')

const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
      console.log("wrong");
    }
    console.log('Connected to the database.');
  });

users_schema.create_users(db)
product_schema.create_products(db)
card_schema.create_card(db)
products_routes.create_products_routes(app)
users_routes.users_routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})