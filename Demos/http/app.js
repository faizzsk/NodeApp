var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<b>Hello World</b>");    
    response.end();

}).listen(8888)
console.log("Sever is started at 8888 port !");