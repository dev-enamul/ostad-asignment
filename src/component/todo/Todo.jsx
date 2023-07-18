import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid';
 
export default function Todo() {
  const [todoTitle, setTodoTitle] = useState([]);
  const unique_id = uuid();
    const totoTitle = (todo)=>{
      setTodoTitle([{id:unique_id.slice(0,8),data:todo},...todoTitle]);
    } 
    const deleteElement = (key)=>{
     
    }
  
     
  return (
    <>
        <div className="p-4 mx-auto mt-10 mb-2 overflow-hidden bg-purple-900 border rounded-lg shadow-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
            <div>
               <TodoForm totoTitle={totoTitle}/>
               <TodoList data={todoTitle} deleteElement={deleteElement}/>
            </div>
        </div>
    </>
  )
}
