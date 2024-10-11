import { useState } from "react"
import { TodoList } from "./TodoList"

export function AddDynamicInputFields() {
  const [inputs, setInputs] = useState([])

  const handleAddInput = () => {
    setInputs([...inputs, {todo: ""}])
  }

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  return (
    <TodoList 
      {...todos}
    />
  )
}