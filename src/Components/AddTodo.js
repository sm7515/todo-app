import React from 'react';

export default function AddTodo({addTodo}){

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.timeStamp)
        let temp = e.currentTarget.todoInput.value;
        addTodo(temp);
        e.currentTarget.todoInput.value="";
    }

    return (
        <div className='todo-input'>
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text' name='todoInput'></input>
            </form>
        </div>
    )
}