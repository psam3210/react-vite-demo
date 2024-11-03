import { useState, useEffect } from 'react'
import ToDoItem from './TodoItem'

export default function ToDo() {
  const baseToDos = localStorage.getItem('toDos') ? JSON.parse(localStorage.getItem('toDos')) : []
  const [toDos, setToDos] = useState(baseToDos)
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
  }, [toDos])

  const addTodo = (e) => {
    e.preventDefault()    
    setToDos([...toDos, {key: new Date().toString(), text}])
    setText('')
  }

  const removeItem = (key) => {
    setToDos(toDos.filter((toDo) => toDo.key !== key))
  }

  return (
    <>
    <h1>My Todo List</h1>
    <form onSubmit={addTodo}>
      <input value={text} onChange={e => setText(e.target.value)} type="text"></input>
      <button type="submit">Add</button>
    </form>
    <ul>
      {toDos.map((todo) => <ToDoItem key={todo.key} text={todo.text} handleRemove={() => removeItem(todo.key)} />)}
    </ul>
    </>
  )
}