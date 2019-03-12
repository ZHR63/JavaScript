const express = require('express');
const exphbs = require('express-handlebars');

// 实例化对象
const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// 配置路由
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.send("关于");
})

// 监听端口
const port = 8080;

app.listen(port, () => {
    console.log(`服务器端口号${port}`);
});