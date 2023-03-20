const sql = ("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,name TEXT, password TEXT,phone TEXT,status TEXT DEFAULT 'user')");

function create_users(database){
    database.run(sql)
}

module.exports = {create_users};