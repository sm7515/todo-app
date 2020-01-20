import React,{useState} from 'react';

export default function ShowComplete({ todos, completeTodo,deleteTodo}){

    let [show, setShow]=useState(false);
    const handleClick =()=>{
        if(show)
            setShow(false);
        else
            setShow(true);
    }

    return (
        <div>
            <div className="collection">
                {show && todos.length !== 0 &&
                    todos.map(todo => {
                        return (
                            todo.complete &&
                            <label className='collection-item' key={todo.id}>
                                <input type="checkbox" className="filled-in" checked={true} />
                                <span onClick={() => completeTodo(todo.id)} className="todo-done grey-text text-lighten-1">{todo.content}</span>
                                <button class="btn-floating btn-small waves-effect waves-light red lighten-3" onClick={() => deleteTodo(todo.id)}><i class="material-icons">close</i></button>
                            </label>
                        )
                    })}
            </div>
            <button className="waves-effect waves-light btn" onClick={() => handleClick()}>
                {show? `hide complete`: `show complete`}
            </button>
        </div>
    )
}