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
                <div className="input-field">
                    <i class="material-icons prefix">event</i>
                    <input type='text' name='todoInput' class="validate"></input>
                    <label htmlFor="todoInput" className="active">Add a todo</label>
                </div>
            </form>
        </div>
    )
}