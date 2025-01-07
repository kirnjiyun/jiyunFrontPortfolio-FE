const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("mockData.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// CORS 설정
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

server.use(router);

server.listen(4000, () => {
    console.log("JSON Server is running on port 4000");
});
