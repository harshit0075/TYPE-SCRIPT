import React, { useState } from 'react'
import { addTodo } from '../api';
import { Todo } from '../constants';

export const TodoInput = () => {
    const [title, setTitle]=useState<string>("");

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newTodo: Todo={
            title,
            status:false
        }
        addTodo(newTodo)
    };

  return (
    <div>
       
        <form onSubmit={handleSubmit}>
            <input type="text"
             value={title}
             placeholder="Add Tod"
              onChange={handleChange}/>
            <button  type='submit'>Add</button>
        </form>
    </div>
  )
}
