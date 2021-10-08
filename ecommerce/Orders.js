var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/ecommerce";
 MongoClient.connect(url, function (err, client) {
  if (err) throw err;
   //create operation
   var tags = [
    {Users_id:"User-01",Total_items:2,Products:"mascara",Billing_address:"Agra",Shipping_address:"Agra-NH",Transaction_status:"success",Payment_mode:"COD",Payment_status:"success",Order_status:"complete"},
   { Users_id:"User-02",Total_items:1,Products:"kajal",Billing_address:"mzn",Shipping_address:"mzn-NH",Transaction_status:"success",Payment_mode:"UPI",Payment_status:"success",Order_status:"complete"},
    {Users_id:"User-03",Total_items:3,Products:"lipstick",Billing_address:"delhi",Shipping_address:"delhi-NH",Transaction_status:"success",Payment_mode:"Paytm",Payment_status:"success",Order_status:"complete"},
    {Users_id:"User-04",Total_items:1,Products:"eyelinear",Billing_address:"meerut",Shipping_address:"meerut-NH",Transaction_status:"failed",Payment_mode:"COD",Payment_status:"success",Order_status:"complete"},
    {Users_id:"User-05",Total_items:2,Products:"liplinear",Billing_address:"sre",Shipping_address:"sre-NH",Transaction_status:"success",Payment_mode:"UPI",Payment_status:"success",Order_status:"complete"},
    {Users_id:"User-06",Total_items:1,Products:"kajal",Billing_address:"bhopa",Shipping_address:"bhopa-NH",Transaction_status:"success",Payment_mode:"Gpay",Payment_status:"success",Order_status:"Delivered"},
    {Users_id:"User-07",Total_items:1,Products:"primer",Billing_address:"aligarh",Shipping_address:"Aligarh-NH",Transaction_status:"failed",Payment_mode:"COD",Payment_status:"success",Order_status:"shipped"}

    ];
   const db = client.db("ecommerce");
  db.collection("Orders").insertMany(tags, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
    
    });
    //read

  var query={Users_id:"User-07"};
  db.collection("Orders").find(query).toArray(function(err,result){
   if(err) throw err;
   console.log(result);
   
});


//update

db.collection("Orders").updateMany({Users_id:"User-07"},{$set :{Users_id:"User11"}},function(err,result){
   if(err) throw err;
   console.log("update = "+(result.modifiedCount));
});
//delete
var myquery = { Users_id:"User-01" }; 
db.collection("Orders").deleteMany(myquery, function(err, result) { 
if (err) throw err; 
console.log(result.deletedCount + " record(s) deleted"); 
client.close(); 
}); 
});
