const mockData = require('../src/mockdata.json');
//const mongojs = require('mongojs')

//const db = mongojs('TodoDataBase', ['TodoCollection']);



const svc = {};

svc.getAllTodos = (req, res, next) => {
  //db.TodoCollection.find(function (err, docs) {
    //console.log(docs);
    res.json(200, mockData.todos);
    //res.status(502);
    
    next();
    // docs is an array of all the documents in mycollection 
  //})
  
};

module.exports = svc;
