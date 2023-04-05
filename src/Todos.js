import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearTodos } from './features/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const add = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    const listTodos = () => {
      return (
        <ul>
          {todos.map(todo => {

            const remove = () => {
              dispatch(removeTodo(todo))
            }

            return (
              <li onClick={remove}>{todo}</li>
            );
          })}
        </ul>
      )
    }

    return (
        <div>
            <form onSubmit={(e) => add(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {listTodos()}
            <button
                aria-label="Clear todos"
                onClick={() => dispatch(clearTodos())}>
                Clear
            </button>
        </div>
    )
}

export default Todos