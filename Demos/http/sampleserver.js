var http=require('http');
var server=http.createServer(function(req,res){
   console.log("Handling the Request !!");
});
server.listen(5000);
console.log("Server is running on port no 5000")
