import {RequestHandler} from "express"
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Created the todo.', createdTodo: newTodo});
};


export const getTodo:RequestHandler = (req,res,next) =>{
    res.status(200)
    .json({
         message:"hwjhdjqhjwahdj",
         data:TODOS
    })
}

export const deleteTodo:RequestHandler<{id:number}> = (req,res,next) =>{
    if(req.params.id == 1){
    throw new Error('Nothing to delete')
    }
    res.json({
        message:'successful'
    })
}