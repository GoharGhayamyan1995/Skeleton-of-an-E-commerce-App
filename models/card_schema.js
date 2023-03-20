const sql = ("CREATE TABLE IF NOT EXISTS card (id INTEGER PRIMARY KEY, user_id INTEGER UNIQUE, FOREIGN KEY (user_id) REFERENCES users(id))");

function create_card(database){
    database.run(sql)
}

module.exports = {create_card};