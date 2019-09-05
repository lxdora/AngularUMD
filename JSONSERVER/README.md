#json-server本地配置教程
1.全局安装json-server
`npm install -g json-server`
2.新建JSONSERVER文件夹
3.新建**db.json**文件，里面可以自定义数据
4.`npm init`可以生成package.json文件
5.连接远程数据
在package.json中的scripts中添加"json:server:remote":"json-server http://..."
#查看所有数据
http://localhost:3000/
#获取所有用户信息
http://localhost:3000/users
#获取所有公司信息
http://localhost:3000/companies
#获取单个公司信息(根据公司id)
http://localhost:3000/companies/1
#获取所有公司id为2的用户
http://localhost:3000/companies/2/users
#根据公司名字获取信息
http://localhost:3000/companies?name=apple
#根据多个公司名字获取信息
http://localhost:3000/companies?name=apple&name=google
#获取一页中只有两个数据
http://localhost:3000?_page=1&_limit=2
#按字段排序 asc升序 desc降序
http://localhost:3000/companies?_sort=name&_order=asc
#获取年龄30及以上的
http://localhost:3000?age_gte=30
