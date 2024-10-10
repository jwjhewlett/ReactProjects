import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { Counter } from "./counter"
import "./styles.css"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const [counter, setCounter] = useState(() => {
    const localCountValue = localStorage.getItem("NEWCOUNT")
    if (localCountValue == null) return 0
    return JSON.parse(localCountValue)
  })

  function modifyCounter(increment) {
    const newCountValue = counter + increment
    setCounter(newCountValue)
    localStorage.setItem("NEWCOUNT", JSON.stringify(newCountValue))
  }

 
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return ( 
  <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    
    <TodoList todos={todos} 
      toggleTodo={toggleTodo}  
      deleteTodo={deleteTodo}
    />
    <h1 className="header">Counter</h1>
    <Counter 
      count={counter}
      modifyCounter={modifyCounter}  
    />
  </> 
  )
}