var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/mydb", function (err, client) {
    var db = client.db('mydb');
    
    db.collection('Persons', function (err, collection) {
        
        collection.find().toArray(function(err, items) {
           if(err) throw err;    
           console.log(items);            
       });
       
   });
});
