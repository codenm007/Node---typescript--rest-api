"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
router.get('/', todos_1.getTodo);
router.post('/', todos_1.createTodo);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
