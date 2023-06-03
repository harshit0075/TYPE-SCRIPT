import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { getTodo } from '../api';
import { Todo } from '../constants';
import { TodoItem } from './TodoItem';

export const TodoApp = () => {
    const [todo, setTodo]=useState<Todo[]>([]);
    const [change, setChange]=useState<boolean>(false);

    const handleUpdate=()=>{
        setChange((prev:boolean)=> !prev)
    }

    useEffect(()=>{
        getTodo().then((res: Todo[])=>{
            setTodo(res);
        })
    },[change])
  return (
    <div>
        
        <h1>Todo App</h1>
        <TodoInput/>
        {todo.map(el=>{
            return <TodoItem key={el.id} {...el} handleUpdate={handleUpdate}/>
        })}
    </div>
  )
}
