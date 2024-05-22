import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
   const [ value, setValue] = useState("")
   const [category, setCategory] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo (value, category)
    setValue("");
    setCategory("");

    
   };

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
         placeholder='Type Your Task' 
         value={value}
         onChange={(e)=> setValue (e.target.value)}/>
        <select value={category} onChange={(e)=> setCategory (e.target.value)}>
            <option value="">Select a Category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
        </select>
        <button type='submit' > Create Task</button>
      </form>
    </div>
  )
}

export default TodoForm
