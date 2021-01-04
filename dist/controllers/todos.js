"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(200)
        .json({
        message: "hwjhdjqhjwahdj",
        data: TODOS
    });
};
exports.getTodo = getTodo;
const deleteTodo = (req, res, next) => {
    if (req.params.id == 1) {
        throw new Error('Nothing to delete');
    }
    res.json({
        message: 'successful'
    });
};
exports.deleteTodo = deleteTodo;
