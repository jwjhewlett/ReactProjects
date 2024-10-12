
export function TodoItem({ id, title, completed, count, toggleTodo, deleteTodo, modifyCount }){
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={e => toggleTodo(id, e.target.checked)} 
        />
        {title}
        {'  '}
        {["(count: ", count, ")"]}
      </label>
      <button onClick={e => modifyCount(id, 1)} className="btn">Increase</button>{'   '}
      <button onClick={e => modifyCount(id, -count)} className="btn">Reset</button>{'   '}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
    </li>
  )
}