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
  	  console.log("数据库已经连接!");
  }
}); 
});
//position
export.postionList = () =>{ 
superagent.get(configInitJson.city)
 .end(function (err, sres) {
 	if(err){
 		console.log("获取position列表数据失败");
 		return ;
 	}
   //TODO将数据存入mongodb中  
   db
   .then((db)=>{ 
	   	const cityLsit =JSON.parse(sres.text).data;
	      db.db("cheerio").collection("position").insertMany(cityLsit, function(err, res) {
	        if (err) throw err; 
	        db.close(); 
	      });
	      },(err)=>{throw err;})
   .catch((err)=>{
   	console.log(err);
   }); 
});
}

//oldindustry
exports.oldindustryList =()=>{



}