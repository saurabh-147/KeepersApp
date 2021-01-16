const Todo = require("../models/todo");
const _ = require("lodash");

exports.getTodoById = (req, res, next, id) => {
  Todo.findById(id).exec((err, foundTodo) => {
    if (err) {
      return res.status(400).json({
        error: "Todo Not Found",
      });
    }
    req.todo = foundTodo;
    next();
  });
};

exports.getAllTodo = (req, res) => {
  Todo.find({})
    .sort({ createdAt: -1 })
    .exec((err, todos) => {
      if (err) {
        return res.status(400).json({
          error: "No Todos Found",
        });
      }
      console.log(todos);
      return res.json(todos);
    });
};

exports.createTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  //   console.log(newTodo);
  newTodo.save((err, todo) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save todo in the list",
      });
    }
    res.json(todo);
  });
};

exports.getTodo = (req, res) => {
  return res.json(req.todo);
};

//update Route

exports.updateTodo = (req, res) => {
  Todo.findById({ _id: req.todo._id }).exec((err, todo) => {
    // console.log(todo);
    if (err) {
      return res.status(400).json({
        error: "No todo found",
      });
    }
    todo = _.extend(todo, req.body);
    todo.save((err, todo) => {
      if (err) {
        return res.status(400).json({
          error: "Not able to update",
        });
      }
      res.json(todo);
    });
  });
};

//Delete route
exports.removeTodo = (req, res) => {
  Todo.remove({ _id: req.todo._id }).exec((err, todo) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to remove the item",
      });
    }
    const { title, description } = todo;
    res.json({
      title: title,
      description: description,
    });
  });
};
