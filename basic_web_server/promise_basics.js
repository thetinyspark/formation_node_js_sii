const fs = require('fs');

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

async function start(){
    const promise1 = readMyFile('./test.txt');
    const promise2 = readMyFile('./test.txt');
    const promise3 = readMyFile('./test.txt');
    const promise4 = readMyFile('./test.txt');

    Promise.all([promise1, promise2, promise3, promise4]).then(
        (value)=>{
            console.log(value);
        }
    ).catch(
        (reason)=>{
            console.log(reason);
        }
    );
    
    try{
        const data1 = await readMyFile('./test.txt');
        const data2 = await readMyFile('./test.txt');
        const data3 = await readMyFile('./test.txt');
        const data4 = await readMyFile('./test1.txt');
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
    }
    catch(error){
        console.log(error);
    }
}

start();