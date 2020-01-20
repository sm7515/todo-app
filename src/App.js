import React, {useState, useEffect} from 'react';
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import ShowComplete from './Components/ShowComplete';

import './App.css';

function App() {

  let [todos, setTodos]=useState([]);
  let [add, setAdd]=useState(false);
  let [complete,setComplete]=useState(false);
  let [dele,setDele]=useState(false);

  const completeTodo=(id)=>{
    todos.forEach((todo)=>{
      if(todo.id===id)
        if(todo.complete)
          todo.complete=false;
        else 
          todo.complete = true;
    })
    setTodos(todos);
    setComplete(true);
  }

  const deleteTodo=(id)=>{
   todos=todos.filter((todo)=>{
      return todo.id!==id;
    })
    setTodos(todos);
    setDele(true);
  }

  const addTodo=(content)=>{
    const todo={
      id:Math.random(),
      content:content,
      complete:false
    }
    todos.push(todo);
    setTodos(todos);
    setAdd(true);
    console.log(todos);
  }
  
  useEffect(()=>{
    if(add)
      setAdd(false)
    if(complete)
      setComplete(false)
    if(dele)
      setDele(false)
  })

  return (
    <div className="App container">
    
      <AddTodo addTodo={addTodo}/>

      <Todos todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
      <ShowComplete todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
