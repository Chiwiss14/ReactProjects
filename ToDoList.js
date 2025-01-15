import React, {useState} from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("jsjksjkjk,shjhajhjh,shgahghagh");

    function handleNewTaskChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
       if (newTask.trim () !== "") {
        setTasks(t=>[...t, newTask]);
        setNewTask("");
       }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }

    function moveTasksUp(index){
       if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);

       }
    }

    function moveTasksDown(index){

    }
    return(<div className='to-do-list-container'>
        
        <h1>To Do List</h1>

        <div>
         <input
          type='text'
           placeholder='Enter A Task.....'
               value={newTask} 
             onChange={handleNewTaskChange}  />
             <button className='Add-button'
               onClick={addTask}>Add Task
               </button>
        </div>

        <ol>
            {tasks.map((task, index)=>(
                <li key={index}>
                    <span className='text'>{task}</span>

                  <div className=''><button className='delete-button task-button' 
                   onClick={()=>deleteTask(index)}>Delete</button>
                     
                     <button className='move-button task-button'  
                   onClick={()=>moveTasksUp(index)}>Up</button>

                    <button className='movedown-button task-button' 
                   onClick={()=>moveTasksDown(index)}>Move Down</button>
                   
                   </div>
                </li>
                ))}
        </ol>


    </div>)
}

export default ToDoList;