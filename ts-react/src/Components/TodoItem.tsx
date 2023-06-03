import React from 'react'
import { Todo } from '../constants'
import { toggleTodo } from '../api';

interface TodoItemProp extends Todo{
    handleUpdate:()=>void;
}

export const TodoItem = ({
    id,
     title,
      status,
       handleUpdate,
    }:TodoItemProp) => {
        const handleToggle=(id?:number)=>{
            // logic
            toggleTodo(status,id).then((res)=>{
                // console.log(res);
                
                handleUpdate()
            })
        };

  return (
    <div>
        <h3>
        {title}-- {status ? "completed" : "Pending"}
        </h3>
        <button onClick={()=>handleToggle(id)}>Toggle</button>
    </div>
  )
}
