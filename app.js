const koa =require("koa");
const staticData= require("./initUtil/initjson.js");
const database =require("./db/database");

const app =new koa();
staticData.cityList();
staticData.postionList();
staticData.oldindustryList();

//清除集合
// database.cleanCollection();
 





app.listen(13126);