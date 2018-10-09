/*此文件创建是初始化城市列表，职能列表，之城分类列表*/
const db=require("../db/database.js").database;
const http=require("https");
const superagent =require("superagent");
const configInitJson=require("../config/initjson.js").initjson;
exports.cityList = () =>{ 
 superagent.get(configInitJson.city)
 .end(function (err, sres) {
 	if(err){
 		console.log("获取城市列表数据失败");
 		return ;
 	}
   //TODO将数据存入mongodb中  
   db
   .then((db)=>{ 
	   	const cityLsit =JSON.parse(sres.text).data.cityList; 
	      db.db("cheerio").collection("city").insertMany(cityLsit, function(err, res) {
	        if (err) throw err; 
	        db.close(); 
	      });
	      },(err)=>{throw err;})
   .catch((err)=>{
   	console.log(err);
   }); 
});
}

//position
exports.postionList = () =>{ 
superagent.get(configInitJson.position)
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
	superagent.get(configInitJson.oldindustry)
 .end(function (err, sres) {
 	if(err){
 		console.log("获取oldindustry列表数据失败");
 		return ;
 	}
   //TODO将数据存入mongodb中  
   db
   .then((db)=>{ 
	   	const cityLsit =JSON.parse(sres.text).data;
	      db.db("cheerio").collection("oldindustry").insertMany(cityLsit, function(err, res) {
	        if (err) throw err; 
	        db.close(); 
	      });
	      },(err)=>{throw err;})
   .catch((err)=>{
   	console.log(err);
   }); 
});
}
