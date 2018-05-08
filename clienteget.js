var http = require('http');

var options = {
  host: 'localhost',
  path: '/home/nunesgrf/Documentos/ProjetoRedes',
  port: 8080,
  method: 'GET'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });
  
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
