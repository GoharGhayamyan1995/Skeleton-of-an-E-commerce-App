const sql = ("CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY,image TEXT,name TEXT,price TEXT,info TEXT)");

function create_products(database){
    database.run(sql)
}

module.exports = {create_products};