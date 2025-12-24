import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState<string[]>(() => {
    const saved = localStorage.getItem("list")
    return saved ? JSON.parse(saved) : []
  })
  
  const [text, setText] = useState("");


  useEffect(() => { 
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]) 
  

  return (
    <>
       <h1>Playground</h1>
       <h2>Todo List</h2>
       <input 
          placeholder="Add a todo" 
          value={text}
          onChange={(e) => setText(e.target.value) }
       />
      <button onClick={
        () => {
          if (text.trim()) {
            setList([...list, text]);
          }
        }
      }>Add To List</button>
      <button onClick={
        () => {
          console.log(list)
        }
      }>Console Test</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}
          <button onClick={
            () => {
              const editedList = list.filter((_, i) => i !== index)
              setList(editedList)
            }
          }>Delete</button>
          </li>
          
        ))}
      </ul>
    </>
  )
}

export default App
