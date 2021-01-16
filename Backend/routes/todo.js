const express = require("express");
const router = express.Router();
const {
  getAllTodo,
  createTodo,
  updateTodo,
  getTodoById,
  removeTodo,
  getTodo,
} = require("../controllers/todo");

//Param
router.param("todoId", getTodoById);

//Actual routes

router.get("/hello", (req, res) => {
  res.send("Hello");
});

//getAllTodo
router.get("/", getAllTodo);

//get single todo => not required for this application
router.get("/:todoId", getTodo);

//create todo
router.post("/create", createTodo);

//updateTodo
router.put("/:todoId", updateTodo);

//deletTodo
router.delete("/:todoId", removeTodo);

module.exports = router;
