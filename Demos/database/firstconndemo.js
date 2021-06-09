var MongoClient = require('mongodb').MongoClient;

// Connect to the db
/*MongoClient.connect("mongodb://localhost:27017/mydb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
      console.log("Client is connected !!");          
});*/
MongoClient.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }
,function(err,data){
    if (err) throw err;

    console.log("Client is connected successfully"+HTMLTableDataCellElement);

        
})