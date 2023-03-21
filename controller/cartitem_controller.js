const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

function get_cartItems(req, res) {
    db.all("SELECT * FROM cartItems", [], (err, row) => {
      if(err){
        res.send(err)
      }
      res.send(row);
    });
}

function add_cartItems(req, res){
    const {user_id,product_id,quantity} = req.body;
    sql = 'INSERT INTO cartitems(user_id,product_id,quantity) VALUES(?,?,?)';
    db.run(sql,[user_id,product_id,quantity], (err)=>{
        if(err){
            res.send(err)
        }
        res.send('well done')
    })
}
    
function update_cartItems(req,res){
    const {quantity} = req.body;
    const {id}= req.params;
    sql = 'UPDATE cartitems SET quantity=? WHERE id=?';
    db.run(sql,[quantity, id], (err,row)=>{
        if(err){
            res.send(err)
        }
        res.send('well done')
    })
}

function delete_cartItems(err,row){
    const{id} = req.params
    sql = 'DELETE FROM cartitems WHERE id=?';
    db.run(sql,[id], (req,res)=>{
        if(err){
            res.send(err)
        }
        res.send('well done')
    })
}




module.exports={add_cartItems, get_cartItems, update_cartItems, delete_cartItems}

