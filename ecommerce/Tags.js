var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/ecommerce";
 MongoClient.connect(url, function (err, client) {
  if (err) throw err;
   //create operation
   var tags = [
    { Name:"User1",Slug:"User-01"},
     { Name:"User2",Slug:"User-02"},
     { Name:"User3",Slug:"User-03"},
     { Name:"User4",Slug:"User-04"},
     { Name:"User5",Slug:"User-05"},
     { Name:"User6",Slug:"User-06"},
     { Name:"User7",Slug:"User-07"},
     { Name:"User8",Slug:"User-08"},
     { Name:"User9",Slug:"User-09"},
     { Name:"User10",Slug:"User-10"}

    ];
   const db = client.db("ecommerce");
  db.collection("Tags").insertMany(tags, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
  
   });
 //read

  var query={Name:"User1"};
   db.collection("Tags").find(query).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    
});


//update

db.collection("Tags").updateMany({Name:"User10"},{$set :{Name:"User11"}},function(err,result){
    if(err) throw err;
    console.log("update = "+(result.modifiedCount));
});
//delete
var myquery = { Name:"User9" }; 
db.collection("Tags").deleteMany(myquery, function(err, result) { 
if (err) throw err; 
console.log(result.deletedCount + " record(s) deleted"); 
client.close(); 
}); 
 });