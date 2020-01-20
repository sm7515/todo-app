import React from 'react';

export default function Todos({ todos, completeTodo, deleteTodo}){

    // console.log(todos)
    
    todos = todos.length!==0 ? todos.filter((todo)=>{
        return todo.complete ===false;
    }) :[];

    const todoList=todos.length!==0? (
        todos.map(todo=>{
            return(
                !todo.complete&&
                <div className='collection-item' key={todo.id}>
                    <input type="checkbox" className="filled-in"/>
                    <span onClick={() => completeTodo(todo.id)}>{todo.content}</span>
                    <button class="btn-floating btn-small waves-effect waves-light red" onClick={()=>deleteTodo(todo.id)}><i class="material-icons">close</i></button>
                </div>
            )
        })
    ):(
        <p className='center'>you have no todos left!</p>
    )

    return(
        <div className='todos collection'>
            {todoList}
        </div>
    )

}