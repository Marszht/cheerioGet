const superagent=require("superagent");
const cheerio=require("cheerio");


const  url ="https://www.zhipin.com/job_detail/?query=node.js&scity=100010000&industry=&position=";
  superagent.get(url)
 .end(function (err, sres) {
   // 常规的错误处理
   if (err) {
     return next(err);
   } 

   var $ = cheerio.load(sres.text);
   var items = [];
   $('.job-list li').each(function (idx, element) {
     var $element = $(element);
    
//      items.push({
//        jobTitle:  $element.find($('.job-title')).text(),
//        slaryRed: $element.find($('.red')).text(),
//      });
//    });
//  console.log(items);
 });
