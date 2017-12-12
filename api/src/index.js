const restify = require('restify');

const server = require('restify').createServer();
const color = require('node-colorify');
const routes = require('../src/routes');

server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.fullResponse());

function corsHandler(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
  res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
  res.setHeader('Access-Control-Max-Age', '1000');

  return next();
}

function optionsRoute(req, res, next) {
  res.send(200);
  return next();
}

server.opts('/\.*/', corsHandler, optionsRoute);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// routes
server.get('/todos', routes.getAllTodos);
server.post('/addTodo', routes.addTodo);
server.put('/updateTodo/:id', routes.updateTodo);
server.del('/removeTodo/:id', routes.removeTodo);


server.listen(3050, '127.0.0.1', () => {
  console.log(
    color.colorItSync(`REST server running at ${server.url}`, { 'fColor': 'green' })
  );
});
