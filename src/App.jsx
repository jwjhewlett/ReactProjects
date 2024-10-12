import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList"
import { Counter } from "./Counter"
import "./styles.css"


export default function App(){

  const [count, setCount] = useState(() =>{
    const localCountVal = localStorage.getItem("COUNT")
    if (localCountVal == null) return 0
    return JSON.parse(localCountVal)
  })

  function modifyCount(value) {
    setCount(count => {
      const newCount = count + value
      localStorage.setItem("COUNT", JSON.stringify(newCount))
      return newCount
    })
  }

  const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
 
  useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false  }, 
      ]
    })
  }

  function toggleTodo( id, completed ){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo( id ) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }
  

  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />  
    <h1 className="header">Counter</h1>
    <Counter counter={count} modifyCount={modifyCount} />
    </>
  )
}

 