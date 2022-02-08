const home = require('./controller/home');
function initRoutes(server){
    server.route(
        {
            method: 'GET', 
            path: '/mode/{mode}/jambon/{jambon}', 
            handler: home.index
        }
    );
}

module.exports = {
    initRoutes
}