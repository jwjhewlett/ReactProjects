import { TodoItem } from "./TodoItem"


export function TodoList({ todos, toggleTodo, deleteTodo, modifyCount }){

  return (
    <ul className="list">
      {todos.length === 0 && "All todos completed"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            modifyCount={modifyCount}
          />
        )
      }
      )}
    </ul>
  )
}