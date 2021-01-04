import {Router} from "express"
import {createTodo,getTodo,deleteTodo} from '../controllers/todos'

const router = Router()

router.get('/',getTodo)

router.post('/',createTodo)

router.delete('/:id',deleteTodo)


export default router