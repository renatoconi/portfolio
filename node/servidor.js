const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile(req, res, callback){
    let path = url.parse(req.url).pathname;
    if(path == "" | path == "/"){
        path = "/index.html";
    };
    
    
    let filename ='.'+ path;


    fs.readFile(filename, (err, data)=>{
        if(err){
            
            if(callback){
              if  (!callback(req, res)){
                res.writeHead(404, {"content-Type": "text/html;charset=utf-8"});
                res.end("<h1>Pagina não encontrada</h1>")


              };
            }

            
        }else{
            res.writeHead(200, {"content-Type": "text/html"});
            res.write(data);
            res.end();
        }
    })
}


function handleRequest(res, req){
    let path = url.parse(req.url).pathname;

    if(path == "/teste"){
        res.end("Teste");
        return true;
    }
    return false;

}

http.createServer((request, respose)=>{

    handleFile(request, respose, handleRequest);


}).listen(3000, (err)=>{
    if(err){
        console.log('ouve um erro no listen:  ' + err)
    }else{
        console.log('Servidor rodando na porta 3000')
    }
})