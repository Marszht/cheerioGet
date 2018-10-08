const koa =require("koa");
const staticData= require("./initUtil/initjson.js");

const app =new koa();
staticData.cityList();

app.listen(13124);