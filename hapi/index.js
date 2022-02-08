const hapi = require('@hapi/hapi');
const {initRoutes} = require('./routes');
async function init(){
    const server = hapi.server(
        {
            port:8081, 
            host:'localhost',
        }
    );

    await server.start();
    initRoutes(server);
    console.log('Server listening on '+server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log("ho non, il y a eu un problème");
    process.exit(0);
});

init();