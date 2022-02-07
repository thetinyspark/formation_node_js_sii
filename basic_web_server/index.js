const fs = require('fs');
const http = require('http'); 
const server = http.createServer(); 

function readMyFile(path){
    return new Promise(
        (resolve, reject)=>{
            if( !fs.existsSync(path) ){
                reject("File does not exists");
                return;
            }

            fs.readFile(
                path, 
                (err,data)=>{
                    if( err ){
                        reject(err);
                    }
                    else{
                        resolve(data.toString());
                    }
                }
            );
        }
    );
}

async function onRequest(clientRequest, clientResponse){
    let data = '';
    let status = 200;

    if( clientRequest.method === 'GET' && clientRequest.url !== '/'){
        try{
            data = await readMyFile('.'+clientRequest.url);
        }
        catch(error){
            status = 404;
            data = 'Not found';
        }
    }
    else{
        data = '<h1>coucou</h1>';
    }
    clientResponse.writeHead(status, {'Content-Type': 'text/html;charset=utf8', });
    clientResponse.write(data); 
    clientResponse.end();
}

server.on("request", onRequest); 
server.listen(666);