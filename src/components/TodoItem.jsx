import './ToDoItem.css' 
import { useState } from 'react'

export default function ToDoItem({text, handleRemove}) {
  const [isDone, setIsDone] = useState(false)
  
  return <li className={isDone ? 'done' : ''}>
    {!isDone && <button onClick={() => setIsDone(true)}>Done</button>}
    {text} 
    <button onClick={handleRemove}>x</button>
    </li>
}