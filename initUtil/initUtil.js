const superagent=require("superagent");
const cheerio=require("cheerio");
const database =require("./db/database.js");


//插入每个页面的信息
exports.insertOnePageInfo=url=>{
  superagent.get(url)
 .end(function (err, sres) {
   // 常规的错误处理
   if (err) {
     return next(err);
   } 

   const $ = cheerio.load(sres.text);
   const items = [];
   $('.job-list li').each(function (idx, element) {
     const $element = $(element);
     const infoObj={}; 
     //TODO数据还没有详细分开
    $element.find($('.info-company   em')).text(',');//添加分隔符将em标签变成','
    $element.find($('.info-primary   em')).text(',');//添加分隔符将em标签变成','
    infoObj.jobTitle=$element.find($('.job-title')).text();
    infoObj.slaryRed=$element.find($('.red')).text();
    infoObj.companyName =$element.find($('.info-company .name  a')).text();
    infoObj.companyInfo =$element.find($('.info-company   p')).text();
    infoObj.jobInfo=$element.find($('.info-primary  p')).text();
    items.push(infoObj);
   });
   //将数据插入数据库中
   database.database
   .then((db)=>{
      db
      .db("cheerio")
      .collection("jobInfo")
      .insertMany(items,(err,res)=>{
        if(err)throw err;
       //TODO 将插入条数返回，比对数目
       if(res.insertedCount===items.length){
        console.log("插入成功");
       }
      });

   }).catch((err)=>{
    console.log(err);
   });
 });
}


//