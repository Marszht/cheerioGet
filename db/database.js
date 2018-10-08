const mongodb=require("mongodb");
const configDb=require("../config/initjson.js");
//连接mongodb数据库
const MongoClient = require('mongodb').MongoClient;
exports.database= new Promise((resolve,reject)=>{
MongoClient.connect(configDb.initdb.url, function(err, db) { 
  if (err){ 
  	 reject(err);
  }
  if(db){
  	resolve(db);
  	  console.log("数据库已创建!");
  }
}); 
});
