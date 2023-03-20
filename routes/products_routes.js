const products_controller = require('../controller/products_controller')
const jwt_authentication=require('../jwt/jwt_autenticate')
const jwt_checkuser=require('../jwt/jwt_checkuser')

function create_products_routes(app){
    app.get('/', products_controller.get_products)
    app.get('/products/:id', products_controller.get_one_product)
    app.post('/new', jwt_authentication.authenticateToken,jwt_checkuser.checkUser,products_controller.add_product)
    app.delete('/delete/:id', jwt_authentication.authenticateToken,jwt_checkuser.checkUser,products_controller.delete_product)
    app.put('/update/:id', jwt_authentication.authenticateToken,jwt_checkuser.checkUser,products_controller.update_product)
}
 
module.exports = {create_products_routes}

// jwt_authentication.authenticateToken,jwt_checkuser.checkUser