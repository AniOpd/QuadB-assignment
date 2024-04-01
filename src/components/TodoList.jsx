import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteTodo,toggleTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [done , setdone]=React.useState("NOT DONE")


  return (
    <>
    <div className='text-center gap-2 font-mono my-10 text-7xl bg-orange-600'>To Do List</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-red-500 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
            // Dispatch the deleteTodo action with the id of the todo to delete
             onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
            <button
          // Dispatch the toggleTodo action with the id of the todo to toggle
             onClick={() => {
                if(done==="NOT DONE"){
                  setdone("DONE")
                }
                else{
                  setdone("NOT DONE")
                }
                dispatch(toggleTodo(todo.id))
              
             }}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {done}
            </button>
            
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos