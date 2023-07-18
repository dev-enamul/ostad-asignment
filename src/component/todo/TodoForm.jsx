import React, { useState } from 'react'
export default function TodoForm({totoTitle}) {
  let [val, setVal]= useState(0);
   
  function submitHandaler(e){
    e.preventDefault();  
    totoTitle(val); 
  } 
  
 
  return (
    <form action="" className='flex justify-between' onSubmit={submitHandaler}>
        <input  type="text" onChange={(e)=>{setVal(e.target.value)}} className='flex-grow p-1 bg-purple-300 rounded-md focus:outline-none'/>
        <button className='px-2 py-3 ml-1 font-bold bg-purple-300 rounded-md text-purple-950'>Create</button>
    </form>
  )
}
