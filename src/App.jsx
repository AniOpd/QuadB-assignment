import { useState } from 'react'
import AddTodo from './components/AddToDo'
import Todos from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
