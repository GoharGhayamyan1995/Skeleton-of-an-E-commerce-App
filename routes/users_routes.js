const users_controller= require('../controller/users_controller')
function users_routes(app){
    app.post('/register',users_controller.register)
    app.post('/login', users_controller.login)
}
module.exports={users_routes}