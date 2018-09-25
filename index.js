const superagent=require("superagent");
const cheerio=require("cheerio");


const  url ="https://www.zhipin.com/c101210100/h_101210100/?query=nodejs&page=1&ka=page-1";
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
     if(idx===0){
      $element.find($('.info-company   em')).text(",");//添加分隔符
    console.log($element.find($('.info-company .name  a')).text()+'=====》公司信息，名字')
    console.log($element.find($('.info-company   p')).text()+'=====》公司信息,行业-融资情况-规模');
    //测试

     } 
     items.push({
       jobTitle:  $element.find($('.job-title')).text(),
       slaryRed: $element.find($('.red')).text(),
     });
   });
 console.log(items);
 });
