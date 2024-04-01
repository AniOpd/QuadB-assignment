import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    // Add a new todo to the list of todos in the store and reset the input field to an empty string 
    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input!=""){
          dispatch(addTodo(input))
          setInput('')
        }
        else return;
    }

  return (
    // Add a form to add a new todo to the list of todos in the store
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center ">
      <input
        type="text"
        className="bg-blue-600 rounded-full border border-black  focus:border-indigo-500 focus:ring-2 focus:bg-yellow-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        // Update the input state with the value of the input field
        onChange={(e) => setInput(e.target.value)}
      />
<button  type="submit" class="inline-block rounded-full border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:bg-blue-400 hover:bg-opacity-10 hover:text-blue-600 focus:border-blue-700 focus:text-blue-700 active:border-blue-800 active:text-blue-800 dark:border-blue-300 dark:text-blue-300 dark:hover:hover:bg-blue-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">
  ADD TO DO
  </button>
    </form>
  )
}

export default AddTodo