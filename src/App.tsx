import { useState, useEffect } from 'react'
import './App.css'
import './Todo.css'

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
       <div className="card">
        <div className="entryControls">
       <input 
          placeholder="Add a todo" 
          value={text}
          onChange={(e) => setText(e.target.value) }
       />
      <button onClick={
        () => {
          if (text.trim()) {
            setList([...list, text.trim()])
            setText("")
          }
        }
      }>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}
          <button 
            className="deleteItem"
            onClick={
              () => {
                const editedList = list.filter((_, i) => i !== index)
                setList(editedList)
              }
            }>X</button>
          </li>
          
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
