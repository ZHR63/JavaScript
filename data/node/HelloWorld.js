// 1. 引入 http 模块
var http = require("http");

var url = require("url");

console.log(url);

// 2.用http模块创建服务
/**
 * request 获取url信息
 * response 浏览器返回响应信息
 */
const Server = http.createServer(function (request, response) {

    const Hello_url = request.headers.host;
    const Hello_path = url.parse(request.url).pathname;

    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    response.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });

    // 往页面打印值
    response.write('<h1 style="text-align:center">Hello NodeJS</h1>');

    // 结束响应
    response.end();

    // 当http://localhost:8080/exit时，退出服务器
    if (Hello_path === '/exit') {
        response.end('Bye!');
        Server.close();
        console.log('再见');
    }

});

Server.listen(8080);