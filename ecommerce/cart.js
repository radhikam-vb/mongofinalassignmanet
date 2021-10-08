var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/ecommerce";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   //create operation
   var cart = [
{Product:"pen",User:"radhika",Product_qty:1,Sell_price:23.04,Base_price:20.60,Total_price:43.60},
{Product:"pencil",User:"priyanka",Product_qty:2,Sell_price:26.04,Base_price:21.02,Total_price:45.08},
{Product:"rubber",User:"chavi",Product_qty:1,Sell_price:67.04,Base_price:40.05,Total_price:140.78},
{Product:"pen",User:"payal",Product_qty:3,Sell_price:89.04,Base_price:70.70,Total_price:190.89},
{Product:"sketch",User:"anshi",Product_qty:1,Sell_price:66.04,Base_price:70.67,Total_price:210.09}

   ];
   const db = client.db("ecommerce");
  db.collection("Carts").insertMany(cart, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
  
   });

   //read

  var query={User:"priyanka"};
   db.collection("Carts").find(query).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    
});
//update
db.collection("Carts").updateMany({User:"anshi"},{$set :{Product_qty:4}},function(err,result){
    if(err) throw err;
    console.log("update = "+(result.modifiedCount));
});
//delete
var myquery = { User:"chavi" }; 
db.collection("Carts").deleteMany(myquery, function(err, result) { 
if (err) throw err; 
console.log(result.deletedCount + " record(s) deleted"); 
client.close(); 
}); 
});