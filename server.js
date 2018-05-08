var http = require('http');
var fs = require('fs')

var okay = "Servidor está armazenando esta string agora";

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    if(req.method == "POST") {
      fs.writeFile("/home/nunesgrf/Documentos/ProjetoRedes/teste.html", body, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("client request: POST - OK");
    });
      res.writeHead(200);
      res.end(" Success");
    }
    else {
      fs.readFile('/home/nunesgrf/Documentos/ProjetoRedes/teste.html', 'utf8', function (err,data) {
        console.log("client request: GET - OK");
        res.writeHead(200)
        res.end("String guardada no servidor: " + data)
      });
      
    }
  });
}).listen(8080);
