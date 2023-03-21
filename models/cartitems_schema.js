const sql = ("CREATE TABLE IF NOT EXISTS cartitems(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, product_id INTEGER NOT NULL, quantity INTEGER, FOREIGN KEY (user_id) REFERENCES users(id),  FOREIGN KEY (product_id) REFERENCES products(id))");

function cartItems_table(database){
    database.run(sql)
}

module.exports = {cartItems_table};