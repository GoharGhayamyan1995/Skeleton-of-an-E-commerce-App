const {add_cartItems, get_cartItems, update_cartItems, delete_cartItems} = require('../controller/cartitem_controller');
const {authenticateToken} = require('../jwt/jwt_autenticate');

function create_cartItems_routes(app){
    app.post('/add',authenticateToken, add_cartItems)
    app.get('/get', authenticateToken, get_cartItems)
    app.put('/put/:id',authenticateToken, update_cartItems)
    app.delete('/deleteprod/:id',authenticateToken, delete_cartItems)
}

module.exports = {create_cartItems_routes}