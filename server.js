const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();
const port =  3001 || process.env.PORT;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('Server is running on port ' + port);
});
