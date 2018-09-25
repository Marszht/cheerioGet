# cheerioGet

#### 项目介绍
爬取boss直聘的数据，目的在于整合过去用过却没有做成项目的技能，主要用到cheerio+mongodb+Echarts+koa

#### 软件架构
软件架构说明


#### 安装教程

1. npm install
2. node index.js

#### 使用说明

1. xxxx
2. xxxx
3. xxxx

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 关于查询连接
https://www.zhipin.com/job_detail/?query=node.js&scity=100010000&industry=&position=

- 获取首页，城市列表(全国级城市)
> https://www.zhipin.com/common/data/city.json

- 获取首页职能分类列表，包括一，二，三等数据
> https://www.zhipin.com/common/data/position.json

- 获取首页职称分类列表数据（行业）
> https://www.zhipin.com/common/data/oldindustry.json


###### 首页搜索框页面搜索链接(四个查询条件，query:查询内容，scity：城市，industry:行业，postion:职能定位，其中query查询职能以及公司)
> https://www.zhipin.com/job_detail/?query=node.js&scity=101010100&industry=&position=(搜索框加了查询内容node.js)
> https://www.zhipin.com/job_detail/?query=+&scity=101210100&industry=&position=100114(搜索框没加查询东西)
> https://www.zhipin.com/c101210100-p100114/h_101210100/?page=2&ka=page-next(点击下一页，page也跟着变)

###### 思路



