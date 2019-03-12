// 引入 http 模块
var http = require("http");

var url = require("url");

// 部署服务器地址
const host = '127.0.0.1',
    port = 8080;

/**
 * 用http模块创建服务
 * request 获取url信息
 * response 浏览器返回响应信息
 */
const Server = http.createServer(function (request, response) {

    const Hello_path = url.parse(request.url).pathname;

    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    response.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });

    // 往页面打印值
    response.write('<h1 style="text-align:center">服务器搭建成功</h1>');

    // 当http://localhost:8080/exit时，退出服务器
    if (Hello_path !== '/favicon.ico')
        if (Hello_path === '/exit') {
            response.end('<h1 style="text-align:center">再见！！！</h1>');
            Server.close();
            console.log('再见');
        }

    // 结束响应
    response.end();

});

Server.listen(port, host);

console.log('服务器启动成功');