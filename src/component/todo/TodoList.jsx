import React from 'react'

export default function TodoList(props) { 
  const deleteHandle = (id)=>{ 
    props.deleteElement(id);
 
  }
  return (
      <> 
      {props.data.map((item, i)=>{
          return(
            <div className='flex justify-between p-3 mt-2 bg-purple-300 rounded-md' key={i}>
                <p className='flex-grow'>{item.data}</p>
                <button className='px-2 py-1 mr-1 font-bold bg-purple-900 rounded-sm ring-purple-50 text-purple-50'>Edit</button>
                <button className='px-2 py-1 mr-1 font-bold bg-red-800 rounded-sm ring-purple-50 text-purple-50' onClick={()=>deleteHandle(item.id)}>Delete</button>
            </div>    
          )
          
      })}
        

        
      </>    
  )
}
