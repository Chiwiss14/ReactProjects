import './App.css'
import  { useState } from 'react'


function App() {
 const [newItem, setNewItem] = useState("")
 const [Todos, setTodos] = useState([])

 function handleSubmit(e) {
   e.preventDefault()

   setTodos((currentTodos)=>{
     return [...currentTodos,
      {id:crypto.randomUUID(),title:newItem ,completed:false}]
   }
  )
  setNewItem("")
 }
   
  function toggleTodo(id,completed) {
    setTodos((currentTodos)=>{
      return currentTodos.map((Todo)=>{
        if(Todo.id === id){
          return {...Todo,completed:!completed}
        }
        return Todo
      })
    })
  }
  
  function deleteTodo(id) {
    setTodos((currentTodos)=>{
      return currentTodos.filter((Todo)=>Todo.id !== id)
    })
  }

  return(
  <div>
   <form onSubmit={handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item' name='item' />
    
    </div>
    <button className='btn'>Add Item</button>
   </form>
    <h1 className='header'>ToDo List</h1>
    <ul className='list'>
      {Todos.length === 0 && "No Todos"}
      {Todos.map(Todo=>{
        return <li key={Todo.id}>
           <label>
        <input type='checkbox' checked={Todo.completed} onChange={e => toggleTodo(Todo.id, e.target.checked)}/>
        {Todo.title}
      </label>
      <button onClick={() => deleteTodo(Todo.id)} className='btn btn-danger'>Delete</button>
     </li>
        
      })}
     
    </ul>
    
    </div>
  )
 
}




export default App
