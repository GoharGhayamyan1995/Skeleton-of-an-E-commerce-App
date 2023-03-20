const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')
  
  function get_products(req,res){
    db.all('SELECT * FROM products',[],(err,data)=>{
    res.send(data)
    })
        
  }
function get_one_product(req,res){
  const id = req.params.id
  db.get('SELECT * FROM products WHERE id=?', [id], (err, data) => {
    res.send(data)
})
}
function add_product(req,res){
    const image = req.body.image
    const name = req.body.name
    const price = req.body.price
    const info = req.body.info
db.run('INSERT INTO products (image,name,price,info) values (?,?,?,?)', [image,name,price,info],(err,data) => {
        res.send(data)
    })
}
function delete_product(req,res){
   const id=req.params.id;
    db.get('DELETE FROM products WHERE id=?', [id], (err, data) => {
        res.send(`product has been deleted`)
        })
}
function update_product(req,res){
    const id = req.params.id;
    const image = req.body.image
    const name = req.body.name
    const price = req.body.price
    const info = req.body.info
    db.run('UPDATE products SET image=?, name=?, price=?, info=? WHERE id=?', [image,name,price,info,id], (err, data) => {
    res.send(`product has been updated`)
    })
}
  module.exports={get_products, get_one_product, add_product, delete_product,update_product}