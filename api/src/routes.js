const mockData = require('../src/mockdata.json');

const svc = {};

svc.getAllTodos = (req, res, next) => {
  res.json(200, mockData.todos);
  next();
};

module.exports = svc;
