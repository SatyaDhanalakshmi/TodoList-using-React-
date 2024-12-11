import {useState} from 'react';
import React from 'react';
import './App.css';


// function  generatedId(){
//   return Math.floor(Math.random()*100)
// }
function App(){
  const[todoInput,updateInput]=useState();
  const[todoList,updateTodos]=useState([
    {
      id:1,
      task:'Learn React'
    },
    {
      id:2,
      task:'Learn Angular'
    }
    
  ])
  let nextId=3;
  function addNewTodo(){
     if(todoInput==""){
        alert("Add some task")
     }
     else{
       let newTodos=[
        ...todoList,
        {
         
          task:todoInput,
          id:nextId++,
        }
       ]
       updateTodos(newTodos);
       updateInput("");

     }
  }

  function deleteTodo(id){
     let updatedTodos= todoList.filter(
          (todo)=>{
            return todo.id!=id
          }
        )
        updateTodos(updatedTodos);
  }
  return(
    <div className='container mt-5 w-25'>
      <h1>Todo App using React</h1> 
       <div className='input-group'>
      <input className="form-control" type='text' onChange={(e)=>{
        let task=e.target.value;
        updateInput(task)
      }} value={todoInput}/>
      <button className=" btn btn-primary" onClick={()=>{addNewTodo()}}>Add</button>
    </div>
     <ul className="list-group">
        {
          todoList.map(
            (todo,id)=>{
              return(
                  <>
                <li  key={todo.id} className="list-group-item">
                      <p>{todo.task}</p>
                     
                   <button className='btn' onClick={()=>{
                       deleteTodo(todo.id)
                      }}>❌</button>
                   </li>
                  </>
              )
            }
          )
        }
     </ul>
    </div>
  )
}
export default App;






