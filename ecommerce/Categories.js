var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/ecommerce";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   //create operation
   var categories = [
      {Name:"Laptop",Slug:"Laptop-User",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc09SK1_cr-SP3fxWAx3jGg0bmYrkCUSWIQ&usqp=CAU",Description:"Laptop is a small, portable personal computer (PC)"},
      {Name:"Mouse",Slug:"Mouse-User",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc09SK1_cr-SP3fxWAx3jGg0bmYrkCUSWIQ&usqp=CAU",Description:"Mouse is movable device"},
      {Name:"Keyboard",Slug:"Keyboard-User",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc09SK1_cr-SP3fxWAx3jGg0bmYrkCUSWIQ&usqp=CAU",Description:"it is an input device"},
      {Name:"Charger",Slug:"Charger-User",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc09SK1_cr-SP3fxWAx3jGg0bmYrkCUSWIQ&usqp=CAU",Description:"It is used to charge"},
      {Name:"Joystick",Slug:"Joystick-User",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc09SK1_cr-SP3fxWAx3jGg0bmYrkCUSWIQ&usqp=CAU",Description:"for gaming"}
   ];
   const db = client.db("ecommerce");
  db.collection("Categories").insertMany(categories, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
  
   });

   //read

  var query={Name:"Laptop"};
   db.collection("Categories").find(query).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    
});
//update
db.collection("Categories").updateMany({Name:"Laptop"},{$set :{Slug:"Lappy-User"}},function(err,result){
    if(err) throw err;
    console.log("update = "+(result.modifiedCount));
});
//delete
var myquery = { Name:"Mouse" }; 
db.collection("Categories").deleteMany(myquery, function(err, result) { 
if (err) throw err; 
console.log(result.deletedCount + " record(s) deleted"); 
client.close(); 
}); 
});