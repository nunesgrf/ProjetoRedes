var http = require('http');
var fs = require('fs')

var postHTML = 
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Entrada: <input name="input1"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';



http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    if(req.method == "POST") {
      console.log('POSTed: ' + body);
      console.log('method: ' + req.method);
      fs.writeFile("/home/nunesgrf/Documentos/ProjetoRedes/teste.html", body, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
      res.writeHead(200);
      res.end(postHTML);
    }
    else {
      res.write(200)
      console.log("GETed: " + body);
      console.log('method: ' + req.method);
      fs.readFile('//home/nunesgrf/Documentos/ProjetoRedes/teste.html', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });
    }
  });
}).listen(8080);

/*var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Ola, Mundo!\n');
}

var server = http.createServer(wildcard);
server.listen(8080);*/