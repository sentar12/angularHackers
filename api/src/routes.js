const mockData = require('../src/mockdata.json');
const mongojs = require('mongojs')

const db = mongojs('TodoDataBase', ['TodoCollection']);

const svc = {};

svc.getAllTodos = (req, res, next) => {
  db.TodoCollection.find(function (err, docs) {
    res.json(200, docs);    
    next();
  }) 
};

svc.addTodo = (req, res, next) => {
  console.log(req);
  db.TodoCollection.find(function (err, docs) {
    res.json(200, docs);    
    next();
  }) 
};

module.exports = svc;